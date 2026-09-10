import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ContemporaryVillaEnvironment() {
  const groupRef = useRef();

  // Procedural landscape coordinates and trees
  const { treePositions } = useMemo(() => {
    const trees = [];
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2 + (Math.random() * 0.2);
      const dist = 12 + Math.random() * 10;
      trees.push({
        x: Math.cos(angle) * dist,
        z: Math.sin(angle) * dist,
        scale: 0.85 + Math.random() * 0.4
      });
    }
    return { treePositions: trees };
  }, []);

  // Subtle ambient camera sway
  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.05 + (pointer.x * 0.08);
      groupRef.current.rotation.x = 0.08 + (pointer.y * -0.04);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Ground Terrace Base — Travertine Stone */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[26, 0.4, 22]} />
        <meshStandardMaterial color="#EFECE6" roughness={0.8} />
      </mesh>

      {/* Manicured Lawn Ribbon */}
      <mesh position={[0, 0.22, 5]} receiveShadow>
        <boxGeometry args={[22, 0.05, 9]} />
        <meshStandardMaterial color="#5B7E6B" roughness={0.85} />
      </mesh>

      {/* Stone Pathway */}
      <mesh position={[-2, 0.25, 6]} receiveShadow>
        <boxGeometry args={[3, 0.04, 8]} />
        <meshStandardMaterial color="#D8D4CA" roughness={0.7} />
      </mesh>

      {/* Contemporary Luxury Villa Architecture */}
      <group position={[0, 0.2, -1]}>
        {/* Ground Floor Main Volume — Warm Limestone Plaster */}
        <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[14, 3.2, 9]} />
          <meshStandardMaterial color="#FAF9F6" roughness={0.65} />
        </mesh>

        {/* Double-Height Glass Pavilion Centerpiece */}
        <mesh position={[0, 2.2, 4.52]}>
          <planeGeometry args={[6, 4.0]} />
          <meshPhysicalMaterial
            color="#A4C2B4"
            transmission={0.6}
            opacity={0.8}
            transparent
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>

        {/* First Floor Cantilevered Master Suite */}
        <mesh position={[2.5, 4.2, 0.5]} castShadow receiveShadow>
          <boxGeometry args={[8.5, 2.6, 8.5]} />
          <meshStandardMaterial color="#EFECE6" roughness={0.6} />
        </mesh>

        {/* Natural Teak Wood Louvers / Screening Wall */}
        <group position={[-4, 4.2, 4.6]}>
          {[-1.6, -1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2, 1.6].map((offset, i) => (
            <mesh key={i} position={[offset, 0, 0]} castShadow>
              <boxGeometry args={[0.08, 2.4, 0.2]} />
              <meshStandardMaterial color="#B8A58A" roughness={0.4} />
            </mesh>
          ))}
        </group>

        {/* Horizontal Architectural Coping Roof Slabs */}
        <mesh position={[0, 5.6, 0]} castShadow>
          <boxGeometry args={[16, 0.3, 11]} />
          <meshStandardMaterial color="#31483D" roughness={0.7} />
        </mesh>

        {/* Glass Balcony Railing on First Floor */}
        <mesh position={[3, 3.6, 4.8]}>
          <boxGeometry args={[6, 0.9, 0.05]} />
          <meshPhysicalMaterial color="#E0ECE7" transparent opacity={0.5} roughness={0.1} />
        </mesh>

        {/* Warm Interior Lighting Glow */}
        <pointLight position={[0, 2.5, 2]} color="#FFE8D0" intensity={2.5} distance={10} />
        <pointLight position={[2.5, 4.2, 2]} color="#FFE8D0" intensity={1.8} distance={8} />
      </group>

      {/* Surrounding Frangipani Trees & Biophilic Planting */}
      {treePositions.map((tree, idx) => (
        <group key={idx} position={[tree.x, 0.2, tree.z]} scale={tree.scale}>
          {/* Trunk */}
          <mesh position={[0, 1.2, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.2, 2.4, 8]} />
            <meshStandardMaterial color="#5C5042" roughness={0.9} />
          </mesh>
          {/* Foliage Canopy */}
          <mesh position={[0, 2.7, 0]} castShadow>
            <sphereGeometry args={[1.3, 10, 10]} />
            <meshStandardMaterial color={idx % 2 === 0 ? "#436553" : "#365344"} roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[620px] relative select-none">
      <Canvas
        camera={{ position: [0, 5.5, 17], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        {/* Warm Natural Daylight Lighting */}
        <ambientLight intensity={1.2} color="#FFFDF9" />
        <directionalLight
          position={[12, 18, 10]}
          intensity={1.8}
          color="#FFF8EE"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-8, 10, -8]} intensity={0.6} color="#D4E4DC" />

        <ContemporaryVillaEnvironment />
      </Canvas>

      {/* Monograph Badge Overlay */}
      <div className="absolute bottom-5 right-5 pointer-events-none bg-ivory-100/90 backdrop-blur-md px-3.5 py-1.5 border border-stone-300/70 text-[10px] font-mono tracking-widest text-charcoal-700 uppercase flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-forest-700 animate-pulse" />
        <span>3D VILLA ENVIRONMENT · INTERACTIVE</span>
      </div>
    </div>
  );
}
