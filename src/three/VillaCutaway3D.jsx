import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ArchitecturalVillaModel({
  activeFloor = 'all',
  villaType = 'east' // 'east' | 'west'
}) {
  const groupRef = useRef();

  const isEast = villaType === 'east';
  const showGround = activeFloor === 'all' || activeFloor === 'ground';
  const showFirst = activeFloor === 'all' || activeFloor === 'first';
  const showTerrace = activeFloor === 'all' || activeFloor === 'terrace';

  useFrame(() => {
    if (groupRef.current) {
      // Rotate orientation based on East vs West
      const targetRotY = isEast ? 0 : Math.PI;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* 1. Plot Base & 180 sq.ft Private Backyard Garden */}
      <group position={[0, 0, 0]}>
        {/* Foundation Plinth Slab */}
        <mesh position={[0, 0.1, 0]} receiveShadow>
          <boxGeometry args={[12, 0.25, 15]} />
          <meshStandardMaterial color="#EFECE6" roughness={0.8} />
        </mesh>

        {/* 180 sq.ft Private Garden Courtyard */}
        <mesh position={[0, 0.24, 5.5]} receiveShadow>
          <boxGeometry args={[10.5, 0.05, 3.2]} />
          <meshStandardMaterial color="#31483D" roughness={0.7} />
        </mesh>

        {/* Teak Sit-Out Deck */}
        <mesh position={[-2.5, 0.26, 4.8]}>
          <boxGeometry args={[4, 0.04, 1.8]} />
          <meshStandardMaterial color="#B8A58A" roughness={0.5} />
        </mesh>

        {/* Garden Frangipani Tree */}
        <group position={[3.5, 0.25, 5.5]}>
          <mesh position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1.8, 8]} />
            <meshStandardMaterial color="#5C5042" />
          </mesh>
          <mesh position={[0, 2.0, 0]} castShadow>
            <sphereGeometry args={[0.9, 10, 10]} />
            <meshStandardMaterial color="#406B52" roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* 2. GROUND LEVEL (Living, Dining, Chef Kitchen, Double-Height Foyer) */}
      {showGround && (
        <group position={[0, 0.25, 0]}>
          {/* Main Ground Slab */}
          <mesh position={[0, 0.1, -0.6]} receiveShadow>
            <boxGeometry args={[10.5, 0.2, 9.2]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.4} />
          </mesh>

          {/* Living Pavilion Walls */}
          <mesh position={[-2.6, 1.3, -0.6]} castShadow receiveShadow>
            <boxGeometry args={[4.8, 2.2, 8.8]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.6} />
          </mesh>

          {/* Dining & Kitchen Volume */}
          <mesh position={[2.8, 1.3, 0.4]} castShadow receiveShadow>
            <boxGeometry args={[4.4, 2.2, 6.8]} />
            <meshStandardMaterial color="#EFECE6" roughness={0.6} />
          </mesh>

          {/* Double-Height Glass Entryway */}
          <mesh position={[0.5, 2.4, 4.1]}>
            <planeGeometry args={[3.6, 4.4]} />
            <meshPhysicalMaterial color="#A4C2B4" transmission={0.7} opacity={0.8} transparent roughness={0.1} />
          </mesh>

          {/* Warm Interior Lighting */}
          <pointLight position={[-1, 1.5, 0]} color="#FFE8D0" intensity={2} distance={8} />
        </group>
      )}

      {/* 3. UPPER LEVEL (Master Suite, Guest Suites, Balconies) */}
      {showFirst && (
        <group position={[0, 2.8, 0]}>
          {/* First Floor Slab */}
          <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
            <boxGeometry args={[11, 0.25, 10]} />
            <meshStandardMaterial color="#EFECE6" roughness={0.7} />
          </mesh>

          {/* Master Bedroom Suite */}
          <mesh position={[2.4, 1.3, 0.2]} castShadow receiveShadow>
            <boxGeometry args={[5.2, 2.2, 8.4]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.6} />
          </mesh>

          {/* Guest Suite & Home Office */}
          <mesh position={[-2.8, 1.3, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[4.6, 2.2, 6.2]} />
            <meshStandardMaterial color="#EFECE6" roughness={0.6} />
          </mesh>

          {/* Teak Wood Privacy Louver Screen */}
          <group position={[-2.8, 1.3, 4.4]}>
            {[-1.5, -1, -0.5, 0, 0.5, 1, 1.5].map((lx, i) => (
              <mesh key={i} position={[lx, 0, 0]} castShadow>
                <boxGeometry args={[0.08, 2.0, 0.25]} />
                <meshStandardMaterial color="#B8A58A" roughness={0.4} />
              </mesh>
            ))}
          </group>

          {/* Balcony Glass Railing */}
          <mesh position={[2.4, 0.7, 4.8]}>
            <boxGeometry args={[5.0, 0.85, 0.05]} />
            <meshPhysicalMaterial color="#C5DCD2" transparent opacity={0.6} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* 4. TERRACE LOUNGE & ARCHITECTURAL OVERHANG */}
      {showTerrace && (
        <group position={[0, 5.2, 0]}>
          {/* Terrace Deck Slab */}
          <mesh position={[0, 0.1, 0]} castShadow>
            <boxGeometry args={[11.5, 0.2, 10.5]} />
            <meshStandardMaterial color="#31483D" roughness={0.6} />
          </mesh>

          {/* Shaded Pergola Pavilion */}
          <group position={[1.5, 1.1, -1.5]}>
            <mesh position={[0, 1.1, 0]}>
              <boxGeometry args={[4.5, 0.1, 4.5]} />
              <meshStandardMaterial color="#B8A58A" roughness={0.5} />
            </mesh>
            {[[-2, -2], [2, -2], [-2, 2], [2, 2]].map(([px, pz], i) => (
              <mesh key={i} position={[px, 0.5, pz]}>
                <cylinderGeometry args={[0.06, 0.06, 1.1, 6]} />
                <meshStandardMaterial color="#31483D" />
              </mesh>
            ))}
          </group>

          {/* Terrace Glass Parapet */}
          <mesh position={[0, 0.5, 5.1]}>
            <boxGeometry args={[10.5, 0.8, 0.05]} />
            <meshPhysicalMaterial color="#C5DCD2" transparent opacity={0.5} roughness={0.1} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function VillaCutaway3D({ activeFloor = 'all', villaType = 'east' }) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[580px] relative select-none">
      <Canvas
        camera={{ position: [0, 9, 20], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.1} color="#FFFDF9" />
        <directionalLight position={[14, 20, 14]} intensity={1.8} color="#FFF8EE" castShadow />
        <directionalLight position={[-12, 12, -12]} intensity={0.5} color="#D4E4DC" />

        <ArchitecturalVillaModel activeFloor={activeFloor} villaType={villaType} />

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.8}
          enableRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* Orientation Compass Badge */}
      <div className="absolute top-4 left-4 pointer-events-none bg-white/90 backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/40 text-[11px] font-mono text-[#141917] uppercase flex items-center space-x-2 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#B89047]" />
        <span>ORIENTATION: {villaType === 'east' ? 'EAST ENTRY · MORNING SUN' : 'WEST ENTRY · SUNSET GARDEN'}</span>
      </div>

      {/* 360° Auto-Rotate Toggle Button */}
      <button
        type="button"
        onClick={() => setAutoRotate(!autoRotate)}
        className="absolute top-4 right-4 z-10 bg-white/95 hover:bg-[#FAF8F5] active:scale-95 transition-all backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/40 text-[11px] font-mono tracking-wider text-[#141917] uppercase flex items-center space-x-2 shadow-xs cursor-pointer"
        title="Toggle 360° Auto-Rotation"
      >
        <span className={`w-2 h-2 rounded-full transition-colors ${autoRotate ? 'bg-[#B89047] animate-pulse' : 'bg-stone-400'}`} />
        <span className="font-semibold text-[#B89047]">{autoRotate ? '360° ROTATING' : 'ROTATION PAUSED'}</span>
      </button>
    </div>
  );
}
