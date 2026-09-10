import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useEditorStore } from '../store/editorStore';
import { useProjectStore } from '../store/projectStore';
import { useUIStore } from '../store/uiStore';
import { createSampleVehicleModel } from './sampleVehicle';
import { Maximize2, Eye, Grid as GridIcon, RefreshCw, Box, Layers } from 'lucide-react';

export const Viewport3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const vehicleGroupRef = useRef<THREE.Group | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);

  const [fps, setFps] = useState<number>(60);
  const { viewMode, setViewMode, isGridVisible, toggleGrid } = useEditorStore();
  const { vehicleModel, setVehicleModel, currentProject } = useProjectStore();
  const { selectedPartId, setSelectedPartId } = useUIStore();

  // Reset camera view
  const resetCamera = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.set(4.2, 2.3, 4.8);
    controlsRef.current.target.set(0, 0.6, 0);
    controlsRef.current.update();
  }, []);

  // Initialize Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(4.2, 2.3, 4.8);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // Don't flip under the floor
    controls.minDistance = 1.0;
    controls.maxDistance = 25.0;
    controls.target.set(0, 0.6, 0);
    controlsRef.current = controls;

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(6, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.bias = -0.0005;
    const d = 5;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88bbff, 0.7);
    fillLight.position.set(-6, 4, -5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffeedd, 0.8);
    rimLight.position.set(0, 5, -8);
    scene.add(rimLight);

    // 6. Floor Grid & Shadow receiver
    const gridHelper = new THREE.GridHelper(20, 40, 0x4f8cff, 0x222222);
    gridHelper.position.y = 0;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.002;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // 7. Load Default Vehicle if empty
    if (!vehicleModel) {
      const { model, object3d } = createSampleVehicleModel();
      scene.add(object3d);
      vehicleGroupRef.current = object3d;
      setVehicleModel(model);
    }

    // 8. Raycaster for Part Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (e: MouseEvent) => {
      if (!renderer.domElement || !vehicleGroupRef.current) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(vehicleGroupRef.current.children, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData && hit.userData.partId) {
          setSelectedPartId(hit.userData.partId);
        }
      }
    };
    renderer.domElement.addEventListener('click', handleClick);

    // 9. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Render Loop & FPS calculation
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }
    };
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('click', handleClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Grid visibility
  useEffect(() => {
    if (gridHelperRef.current) {
      gridHelperRef.current.visible = isGridVisible;
    }
  }, [isGridVisible]);

  // Update Material Shaders when viewMode, selectedPartId, or project materials change
  useEffect(() => {
    if (!vehicleGroupRef.current) return;

    vehicleGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh && child.userData) {
        const partId = child.userData.partId;
        const matId = child.userData.materialId;
        const isSelected = selectedPartId === partId;
        const matConfig = currentProject.materials.find((m) => m.id === matId);

        let matColor = matConfig ? new THREE.Color(matConfig.diffuseColor) : new THREE.Color(0x888888);
        if (isSelected) {
          matColor = new THREE.Color(0x4f8cff);
        }

        if (viewMode === 'wireframe') {
          child.material = new THREE.MeshBasicMaterial({
            color: isSelected ? 0x4f8cff : 0x00ff88,
            wireframe: true,
          });
        } else if (viewMode === 'solid') {
          child.material = new THREE.MeshStandardMaterial({
            color: isSelected ? 0x4f8cff : 0x999999,
            roughness: 0.6,
            metalness: 0.1,
          });
        } else if (viewMode === 'uv') {
          // UV Wire visualization
          child.material = new THREE.MeshStandardMaterial({
            color: isSelected ? 0x4f8cff : 0x334466,
            wireframe: true,
          });
        } else {
          // Textured mode
          child.material = new THREE.MeshStandardMaterial({
            color: matColor,
            roughness: matId === 'mat-glass' ? 0.1 : 0.35,
            metalness: matId === 'mat-chrome' ? 0.9 : 0.15,
            transparent: matId === 'mat-glass',
            opacity: matConfig ? matConfig.opacity : 1.0,
          });
        }
      }
    });
  }, [viewMode, selectedPartId, currentProject.materials]);

  return (
    <div className="relative w-full h-full bg-studio-bg select-none overflow-hidden" ref={containerRef}>
      {/* Top Floating Viewport Control Toolbar */}
      <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 bg-studio-panel/90 backdrop-blur border border-studio-border px-2.5 py-1.5 rounded-lg shadow-lg">
        {/* View Modes */}
        <button
          onClick={() => setViewMode('textured')}
          className={`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${
            viewMode === 'textured' ? 'bg-studio-accent text-white shadow' : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
          }`}
          title="Textured View"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Textured</span>
        </button>

        <button
          onClick={() => setViewMode('solid')}
          className={`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${
            viewMode === 'solid' ? 'bg-studio-accent text-white shadow' : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
          }`}
          title="Solid View"
        >
          <Box className="w-3.5 h-3.5" />
          <span>Solid</span>
        </button>

        <button
          onClick={() => setViewMode('wireframe')}
          className={`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${
            viewMode === 'wireframe' ? 'bg-studio-accent text-white shadow' : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
          }`}
          title="Wireframe View"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Wireframe</span>
        </button>

        <button
          onClick={() => setViewMode('uv')}
          className={`px-2.5 py-1 text-xs font-medium rounded flex items-center space-x-1.5 transition ${
            viewMode === 'uv' ? 'bg-studio-accent text-white shadow' : 'text-studio-muted hover:text-studio-text hover:bg-studio-secondary'
          }`}
          title="UV Wire View"
        >
          <span>UV Mode</span>
        </button>

        <div className="h-4 w-px bg-studio-border mx-1" />

        {/* Toggle Grid */}
        <button
          onClick={toggleGrid}
          className={`p-1.5 rounded transition ${
            isGridVisible ? 'bg-studio-secondary text-studio-accent' : 'text-studio-muted hover:text-studio-text'
          }`}
          title="Toggle Grid Ground"
        >
          <GridIcon className="w-3.5 h-3.5" />
        </button>

        {/* Reset Camera */}
        <button
          onClick={resetCamera}
          className="p-1.5 rounded text-studio-muted hover:text-studio-text hover:bg-studio-secondary transition"
          title="Reset Camera (F)"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Viewport Info Overlay (Bottom-Right) */}
      <div className="absolute bottom-3 right-3 z-10 pointer-events-none bg-studio-panel/80 backdrop-blur border border-studio-border/60 px-2.5 py-1 rounded text-[11px] text-studio-muted font-mono flex items-center space-x-3">
        <span>FPS: <strong className="text-studio-text">{fps}</strong></span>
        <span>•</span>
        <span>Mesh: <strong className="text-studio-text">{vehicleModel?.name || 'Sample Coupe'}</strong></span>
        {selectedPartId && (
          <>
            <span>•</span>
            <span className="text-studio-accent font-semibold">Selected: {selectedPartId}</span>
          </>
        )}
      </div>
    </div>
  );
};
