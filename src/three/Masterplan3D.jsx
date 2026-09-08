import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function MasterplanModel({ activeFilter = 'all', currentStep = 6 }) {
  const groupRef = useRef();

  // Create 189 plotted villa parcels
  const villaPlots = useMemo(() => {
    const plots = [];
    const rows = 14;
    const cols = 14;
    let count = 1;
    for (let r = -rows / 2; r < rows / 2; r++) {
      for (let c = -cols / 2; c < cols / 2; c++) {
        const x = c * 3.6 + (r % 2 === 0 ? 0.3 : -0.3);
        const z = r * 3.4;
        const dist = Math.hypot(x, z);
        if (dist > 7 && dist < 24 && Math.abs(x) > 1.8 && Math.abs(z) > 1.8) {
          if (plots.length < 189) {
            plots.push({
              id: `V-${String(count).padStart(3, '0')}`,
              x,
              z,
              facing: (c > 0) ? 'EAST' : 'WEST',
              number: count++
            });
          }
        }
      }
    }
    return plots;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  const showBoundary = currentStep >= 1 && (activeFilter === 'all' || activeFilter === 'boundary');
  const showRoads = currentStep >= 2 && (activeFilter === 'all' || activeFilter === 'roads');
  const showVillas = currentStep >= 3 && (activeFilter === 'all' || activeFilter === 'villas');
  const showClubhouse = currentStep >= 4 && (activeFilter === 'all' || activeFilter === 'clubhouse');
  const showLandscape = currentStep >= 5 && (activeFilter === 'all' || activeFilter === 'landscape');
  const showSports = currentStep >= 6 && (activeFilter === 'all' || activeFilter === 'sports');

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* 10-Acre Blueprint Base Plate */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[56, 56]} />
        <meshStandardMaterial color="#0A0E11" roughness={0.9} />
      </mesh>

      {/* Blueprint Grid Lines */}
      <gridHelper args={[54, 36, '#1A2A20', '#111815']} position={[0, 0.01, 0]} />

      {/* 1. SITE BOUNDARY (2,780 Linear Feet Perimeter) */}
      {showBoundary && (
        <group>
          <lineLoop>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={5}
                array={new Float32Array([
                  -26, 0.08, -26,
                   26, 0.08, -26,
                   26, 0.08,  26,
                  -26, 0.08,  26,
                  -26, 0.08, -26
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#BA996E" linewidth={3} />
          </lineLoop>
          {/* Peripheral Bio-Buffer Green Ribbon */}
          <mesh position={[0, 0.05, 0]}>
            <ringGeometry args={[25, 26, 4]} />
            <meshBasicMaterial color="#2E4839" transparent opacity={0.5} />
          </mesh>
        </group>
      )}

      {/* 2. ROADWAYS & BOULEVARD SPINE (40ft & 30ft Avenues) */}
      {showRoads && (
        <group>
          {/* Central 40ft Boulevard North-South */}
          <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.2, 50]} />
            <meshBasicMaterial color="#222C27" />
          </mesh>
          {/* Central Boulevard East-West */}
          <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 3.2]} />
            <meshBasicMaterial color="#222C27" />
          </mesh>
          {/* Internal 30ft Residential Access Ring */}
          <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[14, 16.5, 32]} />
            <meshBasicMaterial color="#1A241E" />
          </mesh>
        </group>
      )}

      {/* 3. 189 VILLA PLOTS (Type A 30' x 40') */}
      {showVillas && (
        <group>
          {villaPlots.map((v) => (
            <group key={v.id} position={[v.x, 0.25, v.z]}>
              {/* Plot Boundary */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2.8, 0.2, 2.4]} />
                <meshStandardMaterial
                  color={v.facing === 'EAST' ? '#D6C7B2' : '#C2B59F'}
                  roughness={0.6}
                />
              </mesh>
              {/* Private Backyard Footprint (180 sq.ft) */}
              <mesh position={[0, 0.12, 0.8]}>
                <boxGeometry args={[2.6, 0.02, 0.6]} />
                <meshStandardMaterial color="#274A37" />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 4. CENTRAL 15,000+ SQ.FT SIGNATURE CLUBHOUSE */}
      {showClubhouse && (
        <group position={[0, 0.6, 0]}>
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[7, 1.2, 5]} />
            <meshStandardMaterial color="#BA996E" roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Resort Pool */}
          <mesh position={[0, -0.2, 3.5]}>
            <boxGeometry args={[6, 0.2, 2.5]} />
            <meshStandardMaterial color="#2A83A2" roughness={0.1} />
          </mesh>
          <Html position={[0, 1.8, 0]} center>
            <div className="bg-charcoal-900/90 border border-bronze-400 px-2 py-1 rounded text-[10px] font-mono text-bronze-300 whitespace-nowrap shadow-lg">
              CLUBHOUSE & RESORT POOL
            </div>
          </Html>
        </group>
      )}

      {/* 5. LANDSCAPE ZONES & WATER COURT */}
      {showLandscape && (
        <group>
          {/* Central Water Court */}
          <mesh position={[-5, 0.1, -4]}>
            <cylinderGeometry args={[2.5, 2.5, 0.1, 16]} />
            <meshStandardMaterial color="#1E5F74" roughness={0.1} />
          </mesh>
          {/* Butterfly Meadow & Herb Gardens */}
          <mesh position={[5, 0.1, -5]}>
            <boxGeometry args={[4.5, 0.1, 4]} />
            <meshStandardMaterial color="#2E533C" />
          </mesh>
        </group>
      )}

      {/* 6. ACTIVE SPORTS ARENA & JOGGING TRACK */}
      {showSports && (
        <group position={[0, 0.1, -19]}>
          {/* Half Basketball & Volleyball */}
          <mesh position={[-3, 0, 0]}>
            <boxGeometry args={[4.5, 0.08, 3.2]} />
            <meshStandardMaterial color="#A65B32" />
          </mesh>
          {/* Cricket Nets & Outdoor Gym */}
          <mesh position={[3, 0, 0]}>
            <boxGeometry args={[4.5, 0.08, 3.2]} />
            <meshStandardMaterial color="#386641" />
          </mesh>
          <Html position={[0, 1.2, 0]} center>
            <div className="bg-charcoal-900/90 border border-emerald-400 px-2 py-1 rounded text-[10px] font-mono text-emerald-300 whitespace-nowrap shadow-lg">
              SPORTS ARENA
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}

export default function Masterplan3D({ activeFilter = 'all', currentStep = 6 }) {
  return (
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden border border-white/10 bg-charcoal-950 shadow-2xl">
      <Canvas
        camera={{ position: [0, 36, 26], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#070A0C']} />
        <ambientLight intensity={0.6} color="#DEE6E2" />
        <directionalLight position={[20, 35, 20]} intensity={1.5} color="#FAF7F0" />
        <MasterplanModel activeFilter={activeFilter} currentStep={currentStep} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.3} minPolarAngle={Math.PI / 8} />
      </Canvas>

      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-charcoal-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-stone-300">
        <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse"></span>
        <span>MASTERPLAN 1:500 ARCHITECTURAL BLUEPRINT</span>
      </div>

      <div className="absolute bottom-4 right-4 bg-charcoal-900/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-stone-400 border border-white/10 pointer-events-none">
        DRAG TO ROTATE BLUEPRINT
      </div>
    </div>
  );
}
