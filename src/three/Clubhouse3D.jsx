import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function ClubhouseStructure({ activeSpace = 'all' }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && activeSpace === 'all') {
      groupRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Ground Foundation & Landscaping */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[26, 0.2, 22]} />
        <meshStandardMaterial color="#1E2721" roughness={0.9} />
      </mesh>

      {/* 25-Meter Half-Olympic Lap Swimming Pool */}
      <group position={[-5, 0.25, 4]}>
        {/* Pool Basin */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[11, 0.4, 6]} />
          <meshStandardMaterial color="#163A48" />
        </mesh>
        {/* Water Surface with Reflection */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10.4, 5.4]} />
          <meshStandardMaterial
            color="#2EA8D4"
            roughness={0.05}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
        {/* Submerged loungers & pool deck */}
        <mesh position={[0, 0.03, -3.2]}>
          <boxGeometry args={[11, 0.08, 1.8]} />
          <meshStandardMaterial color="#D7CEC2" roughness={0.5} />
        </mesh>
        <pointLight position={[0, 0.8, 0]} color="#48CAE4" intensity={2} distance={10} />

        {activeSpace === 'pool' && (
          <Html position={[0, 1.5, 0]} center>
            <div className="bg-charcoal-900/95 border border-cyan-400/60 px-3 py-1.5 rounded text-xs font-mono text-cyan-300 shadow-xl whitespace-nowrap">
              25M RESORT SWIMMING POOL & KIDS SPLASH DECK
            </div>
          </Html>
        )}
      </group>

      {/* Open-air BBQ Patio & Food Counter */}
      <group position={[7, 0.25, 4]}>
        {/* Stone Patio Floor */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[7, 0.1, 6]} />
          <meshStandardMaterial color="#84786A" roughness={0.8} />
        </mesh>
        {/* Granite BBQ Counter */}
        <mesh position={[0, 0.6, -1.8]}>
          <boxGeometry args={[5, 0.9, 1.2]} />
          <meshStandardMaterial color="#2B2F33" roughness={0.3} />
        </mesh>
        {/* Dining Pergola */}
        <group position={[0, 2.2, 0]}>
          {[-2.5, 0, 2.5].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]}>
              <boxGeometry args={[0.1, 0.12, 5.5]} />
              <meshStandardMaterial color="#BA996E" />
            </mesh>
          ))}
        </group>

        {activeSpace === 'bbq' && (
          <Html position={[0, 1.5, 0]} center>
            <div className="bg-charcoal-900/95 border border-amber-400/60 px-3 py-1.5 rounded text-xs font-mono text-amber-300 shadow-xl whitespace-nowrap">
              ALFRESCO BBQ PATIO & ARTISANAL FOOD COUNTER
            </div>
          </Html>
        )}
      </group>

      {/* Main Clubhouse Architectural Building (3 Levels) */}
      <group position={[0, 0, -4]}>
        {/* Ground Floor Entrance & Reception Foyer */}
        <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[18, 2.2, 9]} />
          <meshStandardMaterial color="#F3EFE9" roughness={0.4} />
        </mesh>

        {/* Level 1: Double-Height Grand Banquet & Party Hall + Hobby Rooms */}
        <mesh position={[-2, 3.4, 0.5]} castShadow receiveShadow>
          <boxGeometry args={[14, 2.2, 10]} />
          <meshStandardMaterial color="#1E2A24" roughness={0.5} />
        </mesh>
        {/* High glass curtain wall for Party Hall */}
        <mesh position={[-2, 3.4, 5.55]}>
          <planeGeometry args={[13.6, 2.0]} />
          <meshStandardMaterial color="#A9D6E5" transparent opacity={0.45} roughness={0.1} />
        </mesh>
        <pointLight position={[-2, 3.4, 2]} color="#FFD18C" intensity={2.5} distance={12} />

        {activeSpace === 'party' && (
          <Html position={[-2, 4.8, 2]} center>
            <div className="bg-charcoal-900/95 border border-bronze-400/70 px-3 py-1.5 rounded text-xs font-mono text-bronze-300 shadow-xl whitespace-nowrap">
              GRAND MULTI-PURPOSE PARTY HALL (200+ CAPACITY)
            </div>
          </Html>
        )}

        {/* Level 2: 4 Luxury Guest Accommodation Suites */}
        <mesh position={[3.5, 5.4, -0.5]} castShadow receiveShadow>
          <boxGeometry args={[8, 1.8, 8]} />
          <meshStandardMaterial color="#E8E2D7" roughness={0.4} />
        </mesh>

        {activeSpace === 'guest' && (
          <Html position={[3.5, 6.6, 0]} center>
            <div className="bg-charcoal-900/95 border border-emerald-400/60 px-3 py-1.5 rounded text-xs font-mono text-emerald-300 shadow-xl whitespace-nowrap">
              4 BOUTIQUE GUEST SUITES
            </div>
          </Html>
        )}

        {/* Rooftop Café, Library & Sunset Lounge Deck */}
        <group position={[-2.5, 4.6, 0.5]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[11, 0.1, 7]} />
            <meshStandardMaterial color="#8A6B4F" roughness={0.6} />
          </mesh>
          {/* Shaded Timber Pergola */}
          <group position={[0, 1.4, 0]}>
            {[-4, -2, 0, 2, 4].map((px, i) => (
              <mesh key={i} position={[px, 0, 0]}>
                <boxGeometry args={[0.1, 0.15, 6.8]} />
                <meshStandardMaterial color="#BA996E" />
              </mesh>
            ))}
          </group>

          {activeSpace === 'cafe' && (
            <Html position={[0, 2.2, 0]} center>
              <div className="bg-charcoal-900/95 border border-yellow-400/70 px-3 py-1.5 rounded text-xs font-mono text-yellow-300 shadow-xl whitespace-nowrap">
                ROOFTOP SUNSET CAFÉ & READING LOUNGE
              </div>
            </Html>
          )}
        </group>
      </group>
    </group>
  );
}

export default function Clubhouse3D({ activeSpace = 'all', onSelectSpace }) {
  return (
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden border border-white/10 bg-charcoal-950 shadow-2xl">
      <Canvas
        shadows
        camera={{ position: [20, 16, 22], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#090C0E']} />
        <ambientLight intensity={0.65} color="#DCE6E2" />
        <directionalLight
          castShadow
          position={[25, 30, 20]}
          intensity={1.7}
          color="#FFF2DC"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-20, 10, -10]} intensity={0.5} color="#6FA8DC" />

        <ClubhouseStructure activeSpace={activeSpace} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 6} />
      </Canvas>

      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-charcoal-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-stone-300">
        <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse"></span>
        <span>15,000+ SQ.FT SIGNATURE CLUBHOUSE 3D</span>
      </div>

      <div className="absolute bottom-4 right-4 bg-charcoal-900/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-stone-400 border border-white/10 pointer-events-none">
        DRAG TO EXPLORE SPACES
      </div>
    </div>
  );
}
