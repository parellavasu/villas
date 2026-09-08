import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 10-Acre Master Terrain Scene
function LandscapeTerrain({ scrollProgress = 0 }) {
  const meshRef = useRef();
  const villasGroupRef = useRef();

  // Create undulating natural terrain geometry
  const { geometry, villaPositions, roadCurves, treePositions } = useMemo(() => {
    const size = 120;
    const segments = 64;
    const geom = new THREE.PlaneGeometry(size, size, segments, segments);
    geom.rotateX(-Math.PI / 2);

    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      // Gentle 12-meter natural slope gradient across the 10-acre site
      const distFromCenter = Math.sqrt(x * x + z * z);
      const elevation =
        Math.sin(x * 0.05) * 1.8 +
        Math.cos(z * 0.04) * 2.2 +
        (x * 0.04) -
        (distFromCenter > 45 ? Math.pow((distFromCenter - 45) * 0.15, 2) : 0);
      pos.setY(i, elevation);
    }
    geom.computeVertexNormals();

    // 189 Villa Footprint Coordinates arranged organically along internal avenues
    const vPos = [];
    const rows = 14;
    const cols = 14;
    for (let r = -rows / 2; r < rows / 2; r++) {
      for (let c = -cols / 2; c < cols / 2; c++) {
        // Skip central clubhouse park zone and roadways
        const x = c * 6.2 + (Math.sin(r) * 1.5);
        const z = r * 6.0 + (Math.cos(c) * 1.2);
        const dist = Math.hypot(x, z);
        // Reserve center (radius 14) for clubhouse & water court
        if (dist > 12 && dist < 48 && Math.abs(x) > 2.5 && Math.abs(z) > 2.5) {
          if (vPos.length < 189) {
            vPos.push({
              x,
              z,
              y: Math.sin(x * 0.05) * 1.8 + Math.cos(z * 0.04) * 2.2 + (x * 0.04) + 0.6,
              rotY: Math.atan2(-z, -x) * 0.1,
              scale: 0.9 + Math.random() * 0.2
            });
          }
        }
      }
    }

    // Road curves vectors
    const roads = [
      new THREE.Vector3(-45, 0, 0),
      new THREE.Vector3(-20, 0.5, -5),
      new THREE.Vector3(0, 1.2, 0),
      new THREE.Vector3(25, 2.0, 5),
      new THREE.Vector3(45, 2.5, 0),
    ];

    // Tree coordinates
    const trees = [];
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 40;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      trees.push({
        x,
        z,
        y: Math.sin(x * 0.05) * 1.8 + Math.cos(z * 0.04) * 2.2 + (x * 0.04),
        scale: 0.8 + Math.random() * 0.5
      });
    }

    return { geometry: geom, villaPositions: vPos, roadCurves: roads, treePositions: trees };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (villasGroupRef.current) {
      // Gentle breathing idle rotation
      villasGroupRef.current.rotation.y = Math.sin(t * 0.08) * 0.02;
    }
  });

  return (
    <group ref={villasGroupRef}>
      {/* 10-Acre Ground Terrain */}
      <mesh ref={meshRef} geometry={geometry} receiveShadow>
        <meshStandardMaterial
          color="#121815"
          roughness={0.88}
          metalness={0.12}
          flatShading={false}
        />
      </mesh>

      {/* Topographic Contour Wireframe Overlay */}
      <mesh geometry={geometry} position={[0, 0.05, 0]}>
        <meshBasicMaterial
          color="#34483B"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* 10-Acre Perimeter Glowing Architectural Boundary */}
      <lineLoop>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={5}
            array={new Float32Array([
              -50, 0.8, -50,
               50, 2.5, -50,
               50, 3.8,  50,
              -50, 1.5,  50,
              -50, 0.8, -50
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#BA996E" linewidth={2} transparent opacity={0.7} />
      </lineLoop>

      {/* 189 Modern Architectural Villa Volumes */}
      {villaPositions.map((v, idx) => (
        <group key={idx} position={[v.x, v.y, v.z]} rotation={[0, v.rotY, 0]}>
          {/* Villa Base Ground Floor */}
          <mesh castShadow receiveShadow position={[0, 0.45, 0]}>
            <boxGeometry args={[2.4 * v.scale, 0.9 * v.scale, 2.2 * v.scale]} />
            <meshStandardMaterial color="#E8E2D5" roughness={0.6} metalness={0.1} />
          </mesh>
          {/* First Floor Cantilevered Volume */}
          <mesh castShadow position={[0.2, 1.1, 0]}>
            <boxGeometry args={[2.2 * v.scale, 0.7 * v.scale, 2.0 * v.scale]} />
            <meshStandardMaterial color="#26352C" roughness={0.4} metalness={0.2} />
          </mesh>
          {/* Second Floor Penthouse & Terrace */}
          <mesh position={[-0.2, 1.6, -0.1]}>
            <boxGeometry args={[1.5 * v.scale, 0.5 * v.scale, 1.4 * v.scale]} />
            <meshStandardMaterial color="#D5C5B0" roughness={0.7} />
          </mesh>
          {/* Glowing Warm Interior Window Light */}
          <mesh position={[0, 0.5, 1.15 * v.scale]}>
            <planeGeometry args={[1.2 * v.scale, 0.4 * v.scale]} />
            <meshBasicMaterial color="#FFD18C" />
          </mesh>
        </group>
      ))}

      {/* Central 15,000+ Sq.Ft Signature Clubhouse */}
      <group position={[0, 1.8, 0]}>
        {/* Main Clubhouse Pavilion */}
        <mesh castShadow position={[0, 1.0, 0]}>
          <boxGeometry args={[10, 2.0, 7]} />
          <meshStandardMaterial color="#F5EFE6" roughness={0.3} metalness={0.15} />
        </mesh>
        {/* Cantilevered Roof Terrace Pergola */}
        <mesh position={[0, 2.2, 0]}>
          <boxGeometry args={[11.5, 0.25, 8.5]} />
          <meshStandardMaterial color="#BA996E" roughness={0.5} metalness={0.5} />
        </mesh>
        {/* Resort Infinity Swimming Pool */}
        <mesh position={[0, 0.1, 5.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[9, 4.5]} />
          <meshStandardMaterial
            color="#2A6478"
            roughness={0.08}
            metalness={0.8}
            transparent
            opacity={0.88}
          />
        </mesh>
        {/* Pool Water Reflection Light */}
        <pointLight position={[0, 1.2, 5.5]} color="#48CAE4" intensity={1.5} distance={15} />
      </group>

      {/* Landscaped Indigenous Trees */}
      {treePositions.map((t, idx) => (
        <group key={`tree-${idx}`} position={[t.x, t.y, t.z]}>
          {/* Trunk */}
          <mesh position={[0, 0.75 * t.scale, 0]}>
            <cylinderGeometry args={[0.08 * t.scale, 0.14 * t.scale, 1.5 * t.scale, 6]} />
            <meshStandardMaterial color="#3E2C1C" roughness={0.9} />
          </mesh>
          {/* Foliage Canopy */}
          <mesh castShadow position={[0, 1.8 * t.scale, 0]}>
            <dodecahedronGeometry args={[0.9 * t.scale, 1]} />
            <meshStandardMaterial
              color={idx % 3 === 0 ? "#2B4C38" : idx % 2 === 0 ? "#375A44" : "#456E54"}
              roughness={0.7}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Camera Flight Controller
function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime() * 0.12;
    // Gentle cinematic aerial orbit
    camera.position.x = Math.sin(t) * 52;
    camera.position.z = Math.cos(t) * 52;
    camera.position.y = 36 + Math.sin(t * 0.5) * 4;
    camera.lookAt(0, 2, 0);
  });
  return null;
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [45, 38, 45], fov: 42, near: 0.5, far: 300 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Atmospheric Lighting & Horizon Fog */}
        <color attach="background" args={['#070809']} />
        <fog attach="fog" args={['#070809', 55, 130]} />

        <ambientLight intensity={0.65} color="#C4D7D1" />
        
        {/* Golden Hour Directional Sunlight */}
        <directionalLight
          castShadow
          position={[60, 45, 30]}
          intensity={1.8}
          color="#FFF0D6"
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={180}
          shadow-camera-left={-60}
          shadow-camera-right={60}
          shadow-camera-top={60}
          shadow-camera-bottom={-60}
          shadow-bias={-0.0005}
        />

        {/* Subtle Warm Ground Fill Light */}
        <hemisphereLight skyColor="#2E4839" groundColor="#0E1210" intensity={0.5} />

        {/* 3D Scene */}
        <LandscapeTerrain />
        <CameraRig />
      </Canvas>

      {/* Architectural HUD Overlay */}
      <div className="absolute top-8 left-8 hidden md:flex items-center space-x-3 text-[11px] font-mono tracking-widest text-bronze-400/70 uppercase">
        <span className="w-2 h-2 rounded-full bg-bronze-500 animate-ping"></span>
        <span>AERIAL SENSOR: 12.9842° N, 77.5946° E</span>
        <span className="text-white/20">|</span>
        <span>ELEVATION: 924M AMSL</span>
        <span className="text-white/20">|</span>
        <span>SCALE: 1:500 ARCHITECTURAL</span>
      </div>
    </div>
  );
}
