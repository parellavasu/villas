import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function ClubhouseStructure({ activeSpace = 'all' }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && activeSpace === 'all') {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Ground Foundation & Landscaping — Light Architectural Concrete */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[26, 0.2, 22]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.7} />
      </mesh>

      {/* 25-Meter Half-Olympic Lap Swimming Pool — Radiant Azure Blue Water */}
      <group position={[-5, 0.25, 4]}>
        {/* Pool Basin */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[11, 0.4, 6]} />
          <meshStandardMaterial color="#0A2540" />
        </mesh>
        {/* Water Surface with Radiant Azure Blue */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10.4, 5.4]} />
          <meshStandardMaterial
            color="#0284C7"
            roughness={0.05}
            metalness={0.85}
            transparent
            opacity={0.92}
          />
        </mesh>
        {/* White stone pool deck */}
        <mesh position={[0, 0.03, -3.2]}>
          <boxGeometry args={[11, 0.08, 1.8]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
        <pointLight position={[0, 0.8, 0]} color="#38BDF8" intensity={2.5} distance={10} />

        {activeSpace === 'pool' && (
          <Html position={[0, 1.5, 0]} center>
            <div className="bg-white/95 border border-sky-300 px-3 py-1.5 rounded text-xs font-mono text-navy-900 shadow-md whitespace-nowrap">
              <span className="text-cobalt-600 font-bold">25M LAP POOL</span> & KIDS SPLASH DECK
            </div>
          </Html>
        )}
      </group>

      {/* Open-air BBQ Patio & Food Counter */}
      <group position={[7, 0.25, 4]}>
        {/* White Stone Patio Floor */}
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[7, 0.1, 6]} />
          <meshStandardMaterial color="#F1F5F9" roughness={0.6} />
        </mesh>
        {/* Granite BBQ Counter */}
        <mesh position={[0, 0.6, -1.8]}>
          <boxGeometry args={[5, 0.9, 1.2]} />
          <meshStandardMaterial color="#0A2540" roughness={0.2} />
        </mesh>
        {/* Natural Teak Dining Pergola */}
        <group position={[0, 2.2, 0]}>
          {[-2.5, 0, 2.5].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]}>
              <boxGeometry args={[0.1, 0.12, 5.5]} />
              <meshStandardMaterial color="#C49A6C" />
            </mesh>
          ))}
        </group>

        {activeSpace === 'bbq' && (
          <Html position={[0, 1.5, 0]} center>
            <div className="bg-white/95 border border-sky-300 px-3 py-1.5 rounded text-xs font-mono text-navy-900 shadow-md whitespace-nowrap">
              <span className="text-cobalt-600 font-bold">ALFRESCO BBQ PATIO</span> & FOOD COUNTER
            </div>
          </Html>
        )}
      </group>

      {/* Main Clubhouse Architectural Building (3 Levels) — Pure White Architecture */}
      <group position={[0, 0, -4]}>
        {/* Ground Floor Entrance & Reception Foyer */}
        <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[18, 2.2, 9]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.25} />
        </mesh>

        {/* Level 1: Double-Height Grand Banquet & Party Hall + Hobby Rooms */}
        <mesh position={[-2, 3.4, 0.5]} castShadow receiveShadow>
          <boxGeometry args={[14, 2.2, 10]} />
          <meshStandardMaterial color="#F8FAFC" roughness={0.3} />
        </mesh>
        {/* Clear Glass curtain wall for Party Hall */}
        <mesh position={[-2, 3.4, 5.55]}>
          <planeGeometry args={[13.6, 2.0]} />
          <meshStandardMaterial color="#BAE6FD" transparent opacity={0.5} roughness={0.1} />
        </mesh>
        <pointLight position={[-2, 3.4, 2]} color="#E0F2FE" intensity={2.0} distance={12} />

        {activeSpace === 'party' && (
          <Html position={[-2, 4.8, 2]} center>
            <div className="bg-white/95 border border-sky-300 px-3 py-1.5 rounded text-xs font-mono text-navy-900 shadow-md whitespace-nowrap">
              <span className="text-cobalt-600 font-bold">GRAND PARTY HALL</span> (200+ CAPACITY)
            </div>
          </Html>
        )}

        {/* Level 2: 4 Luxury Guest Accommodation Suites */}
        <mesh position={[3.5, 5.4, -0.5]} castShadow receiveShadow>
          <boxGeometry args={[8, 1.8, 8]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>

        {activeSpace === 'guest' && (
          <Html position={[3.5, 6.6, 0]} center>
            <div className="bg-white/95 border border-sky-300 px-3 py-1.5 rounded text-xs font-mono text-navy-900 shadow-md whitespace-nowrap">
              <span className="text-cobalt-600 font-bold">4 BOUTIQUE GUEST SUITES</span>
            </div>
          </Html>
        )}

        {/* Rooftop Café, Library & Sunset Lounge Deck */}
        <group position={[-2.5, 4.6, 0.5]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[11, 0.1, 7]} />
            <meshStandardMaterial color="#C49A6C" roughness={0.5} />
          </mesh>
          {/* Shaded Timber Pergola with Navy Trim */}
          <group position={[0, 1.4, 0]}>
            {[-4, -2, 0, 2, 4].map((px, i) => (
              <mesh key={i} position={[px, 0, 0]}>
                <boxGeometry args={[0.1, 0.15, 6.8]} />
                <meshStandardMaterial color="#0A2540" />
              </mesh>
            ))}
          </group>

          {activeSpace === 'cafe' && (
            <Html position={[0, 2.2, 0]} center>
              <div className="bg-white/95 border border-sky-300 px-3 py-1.5 rounded text-xs font-mono text-navy-900 shadow-md whitespace-nowrap">
                <span className="text-cobalt-600 font-bold">ROOFTOP CAFÉ</span> & READING LOUNGE
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
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden border border-sky-100 bg-white shadow-arch-card">
      <Canvas
        shadows
        camera={{ position: [20, 16, 22], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#F8FAFC']} />
        <ambientLight intensity={0.8} color="#F0F9FF" />
        <directionalLight
          castShadow
          position={[25, 30, 20]}
          intensity={1.8}
          color="#FFFFFF"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-20, 10, -10]} intensity={0.6} color="#BAE6FD" />

        <ClubhouseStructure activeSpace={activeSpace} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 6} />
      </Canvas>

      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200 text-xs font-mono text-navy-900 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-cobalt-600 animate-pulse"></span>
        <span>15,000+ SQ.FT SIGNATURE CLUBHOUSE 3D</span>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-slate-500 border border-sky-100 pointer-events-none">
        DRAG TO EXPLORE SPACES
      </div>
    </div>
  );
}
