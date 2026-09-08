import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

function ArchitecturalVillaModel({
  activeFloor = 'all',
  isExploded = false,
  villaType = 'east',
  stage = 8
}) {
  const groupRef = useRef();

  // Vertical offsets when in exploded axonometric mode
  const yOffsetGround = isExploded ? 0 : 0;
  const yOffsetFirst = isExploded ? 3.5 : (activeFloor === 'ground' ? 50 : 0);
  const yOffsetSecond = isExploded ? 7.0 : (activeFloor === 'ground' || activeFloor === 'first' ? 50 : 0);

  // Ground visibility
  const showGround = activeFloor === 'all' || activeFloor === 'ground' || isExploded;
  const showFirst = (activeFloor === 'all' || activeFloor === 'first' || isExploded) && stage >= 3;
  const showSecond = (activeFloor === 'all' || activeFloor === 'second' || isExploded) && stage >= 4;

  useFrame(() => {
    if (groupRef.current && !isExploded && activeFloor === 'all') {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* 1. Plot Base & 180 sq.ft Private Backyard Garden (30ft x 40ft Footprint) */}
      <group position={[0, 0, 0]}>
        {/* Foundation plinth */}
        <mesh position={[0, 0.1, 0]} receiveShadow>
          <boxGeometry args={[11, 0.2, 14]} />
          <meshStandardMaterial color="#2B3033" roughness={0.9} />
        </mesh>

        {/* 180 sq.ft Landscaped Backyard */}
        <mesh position={[0, 0.22, 5.2]} receiveShadow>
          <boxGeometry args={[9.5, 0.05, 3.0]} />
          <meshStandardMaterial color="#263E2E" roughness={0.8} />
        </mesh>

        {/* Garden frangipani / foliage tree */}
        <group position={[3.2, 0.25, 5.2]}>
          <mesh position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1.8, 8]} />
            <meshStandardMaterial color="#4A3B2C" />
          </mesh>
          <mesh position={[0, 2.0, 0]} castShadow>
            <dodecahedronGeometry args={[0.8, 1]} />
            <meshStandardMaterial color="#375A44" roughness={0.6} />
          </mesh>
        </group>

        {/* Backyard timber deck */}
        <mesh position={[-2.5, 0.23, 4.4]}>
          <boxGeometry args={[3.8, 0.04, 1.8]} />
          <meshStandardMaterial color="#8C6747" roughness={0.7} />
        </mesh>
      </group>

      {/* 2. GROUND FLOOR (880 sq.ft) */}
      {showGround && (
        <group position={[0, yOffsetGround, 0]}>
          {/* Foundation & Columns (Stage >= 1) */}
          {stage >= 1 && (
            <group>
              {/* RCC Footings / Columns */}
              {[-4, 0, 4].map((x) =>
                [-4, 0, 3].map((z) => (
                  <mesh key={`col-${x}-${z}`} position={[x, 1.1, z]} castShadow>
                    <boxGeometry args={[0.35, 2.0, 0.35]} />
                    <meshStandardMaterial color="#70767A" roughness={0.8} />
                  </mesh>
                ))
              )}
            </group>
          )}

          {/* Floor Slab (Stage >= 3) */}
          {stage >= 3 && (
            <mesh position={[0, 0.2, -0.5]} receiveShadow>
              <boxGeometry args={[9.5, 0.15, 8.5]} />
              <meshStandardMaterial color="#E3DDD3" roughness={0.6} />
            </mesh>
          )}

          {/* Wall Enclosures & Rooms (Stage >= 4) */}
          {stage >= 4 && (
            <group>
              {/* Living & Dining Hall Walls */}
              <mesh position={[-2.4, 1.2, -0.5]} castShadow receiveShadow>
                <boxGeometry args={[4.2, 1.9, 8.0]} />
                <meshStandardMaterial color="#FAF6F0" roughness={0.5} />
              </mesh>
              {/* Kitchen & Guest Bedroom */}
              <mesh position={[2.5, 1.2, 0.5]} castShadow receiveShadow>
                <boxGeometry args={[4.0, 1.9, 6.0]} />
                <meshStandardMaterial color="#EDE7DD" roughness={0.5} />
              </mesh>
              {/* Car Portico (East or West configuration) */}
              <mesh position={[villaType === 'east' ? 2.5 : -2.5, 1.2, -3.5]}>
                <boxGeometry args={[3.8, 0.2, 3.8]} />
                <meshStandardMaterial color="#2B3830" roughness={0.4} metalness={0.2} />
              </mesh>
            </group>
          )}

          {/* Glass Doors opening to Backyard (Stage >= 5) */}
          {stage >= 5 && (
            <mesh position={[-1.5, 1.1, 3.5]}>
              <boxGeometry args={[3.2, 1.8, 0.08]} />
              <meshStandardMaterial color="#99C1B9" transparent opacity={0.4} roughness={0.1} />
            </mesh>
          )}

          {/* Interior Warm Light */}
          {stage >= 7 && (
            <pointLight position={[0, 1.5, 0]} color="#FFDFB0" intensity={1.5} distance={8} />
          )}

          {/* Label when active */}
          {(activeFloor === 'ground' || isExploded) && (
            <Html position={[-5.5, 1.2, 0]} center>
              <div className="bg-charcoal-900/95 border border-bronze-500/60 px-3 py-1.5 rounded text-xs font-mono text-ivory-100 whitespace-nowrap shadow-xl">
                <span className="text-bronze-400 font-bold">LEVEL 00</span> | GROUND FLOOR (880 SQ.FT)
              </div>
            </Html>
          )}
        </group>
      )}

      {/* 3. FIRST FLOOR (850 sq.ft) */}
      {showFirst && (
        <group position={[0, 2.1 + yOffsetFirst, 0]}>
          {/* Floor Slab */}
          <mesh position={[0, 0, -0.2]} receiveShadow>
            <boxGeometry args={[9.8, 0.2, 9.2]} />
            <meshStandardMaterial color="#D1CBC1" roughness={0.7} />
          </mesh>

          {/* Master Bedroom Suite */}
          <mesh position={[-2.2, 1.1, -0.2]} castShadow receiveShadow>
            <boxGeometry args={[4.8, 2.0, 8.2]} />
            <meshStandardMaterial color="#FAF6F0" roughness={0.4} />
          </mesh>

          {/* Children Suite & Upper Lounge */}
          <mesh position={[2.4, 1.1, 0.2]} castShadow receiveShadow>
            <boxGeometry args={[4.2, 2.0, 7.4]} />
            <meshStandardMaterial color="#EDE7DD" roughness={0.4} />
          </mesh>

          {/* Cantilever Master Balcony */}
          <group position={[-2.2, 0.8, -4.6]}>
            <mesh position={[0, -0.6, 0]}>
              <boxGeometry args={[4.2, 0.15, 1.6]} />
              <meshStandardMaterial color="#27382F" />
            </mesh>
            {/* Glass Railing */}
            <mesh position={[0, 0.1, -0.7]}>
              <boxGeometry args={[4.2, 0.8, 0.05]} />
              <meshStandardMaterial color="#99C1B9" transparent opacity={0.5} />
            </mesh>
          </group>

          {/* Architectural Wooden Louvers (Stage >= 6) */}
          {stage >= 6 && (
            <group position={[villaType === 'east' ? 4.6 : -4.6, 1.1, 0]}>
              {[-1.5, -0.7, 0.1, 0.9, 1.7].map((lz, idx) => (
                <mesh key={idx} position={[0, 0, lz]}>
                  <boxGeometry args={[0.08, 1.9, 0.15]} />
                  <meshStandardMaterial color="#BA996E" metalness={0.3} roughness={0.5} />
                </mesh>
              ))}
            </group>
          )}

          {/* Interior Warm Light */}
          {stage >= 7 && (
            <pointLight position={[0, 1.2, 0]} color="#FFE1BA" intensity={1.4} distance={7} />
          )}

          {(activeFloor === 'first' || isExploded) && (
            <Html position={[-5.5, 1.1, 0]} center>
              <div className="bg-charcoal-900/95 border border-bronze-500/60 px-3 py-1.5 rounded text-xs font-mono text-ivory-100 whitespace-nowrap shadow-xl">
                <span className="text-bronze-400 font-bold">LEVEL 01</span> | FIRST FLOOR (850 SQ.FT)
              </div>
            </Html>
          )}
        </group>
      )}

      {/* 4. SECOND FLOOR (532 sq.ft + Stargazing Terrace) */}
      {showSecond && (
        <group position={[0, 4.3 + yOffsetSecond, 0]}>
          {/* Slab */}
          <mesh position={[0, 0, -0.2]} receiveShadow>
            <boxGeometry args={[9.8, 0.2, 9.2]} />
            <meshStandardMaterial color="#D1CBC1" roughness={0.7} />
          </mesh>

          {/* Entertainment Lounge & Studio */}
          <mesh position={[-1.5, 1.0, -1.2]} castShadow receiveShadow>
            <boxGeometry args={[6.0, 1.8, 6.0]} />
            <meshStandardMaterial color="#2B3630" roughness={0.5} />
          </mesh>

          {/* Open Stargazing Terrace Wooden Deck */}
          <mesh position={[1.8, 0.1, 2.0]}>
            <boxGeometry args={[5.2, 0.05, 4.2]} />
            <meshStandardMaterial color="#825E3B" roughness={0.6} />
          </mesh>

          {/* Modern Rooftop Pergola Canopy */}
          <group position={[1.8, 2.0, 2.0]}>
            {[-1.8, -0.9, 0, 0.9, 1.8].map((px, idx) => (
              <mesh key={idx} position={[px, 0, 0]}>
                <boxGeometry args={[0.08, 0.12, 4.4]} />
                <meshStandardMaterial color="#BA996E" metalness={0.7} />
              </mesh>
            ))}
          </group>

          {(activeFloor === 'second' || isExploded) && (
            <Html position={[-5.5, 1.0, 0]} center>
              <div className="bg-charcoal-900/95 border border-bronze-500/60 px-3 py-1.5 rounded text-xs font-mono text-ivory-100 whitespace-nowrap shadow-xl">
                <span className="text-bronze-400 font-bold">LEVEL 02</span> | PENTHOUSE & TERRACE (532 SQ.FT)
              </div>
            </Html>
          )}
        </group>
      )}
    </group>
  );
}

export default function VillaCutaway3D({
  activeFloor = 'all',
  isExploded = false,
  villaType = 'east',
  stage = 8
}) {
  return (
    <div className="w-full h-[540px] relative rounded-2xl overflow-hidden border border-white/10 bg-charcoal-950 shadow-2xl">
      <Canvas
        shadows
        camera={{ position: [14, 12, 16], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#080A0C']} />
        <ambientLight intensity={0.6} color="#E8EEEC" />
        <directionalLight
          castShadow
          position={[18, 25, 15]}
          intensity={1.6}
          color="#FFF3E0"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-15, 10, -10]} intensity={0.5} color="#A3C4BC" />

        <ArchitecturalVillaModel
          activeFloor={activeFloor}
          isExploded={isExploded}
          villaType={villaType}
          stage={stage}
        />

        <OrbitControls
          enableZoom={true}
          maxDistance={35}
          minDistance={10}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 8}
        />
      </Canvas>

      {/* 3D Viewport Controls & Orientation Marker */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-charcoal-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-stone-300">
        <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse"></span>
        <span className="uppercase">TYPE A — {villaType} AXONOMETRIC 3D</span>
        <span className="text-white/20">|</span>
        <span className="text-bronze-400">{isExploded ? "DISSECTED LAYERS" : activeFloor.toUpperCase()}</span>
      </div>

      <div className="absolute bottom-4 right-4 bg-charcoal-900/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-stone-400 border border-white/10 pointer-events-none">
        DRAG TO ORBIT • PINCH TO ZOOM
      </div>
    </div>
  );
}
