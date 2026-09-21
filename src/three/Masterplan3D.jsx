import React, { useRef, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Optimized Procedural 3D Villa for Smooth 60fps Rendering
function PlottedVilla({ plot, isHighlighted }) {
  const baseColor = isHighlighted ? '#FFFFFF' : '#E5E7EB';
  const roofColor = isHighlighted ? '#EA580C' : '#9CA3AF';

  return (
    <group position={[plot.x, 0.05, plot.z]}>
      {/* 1. Private Landscaped Garden Yard */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.6, 2.3]} />
        <meshBasicMaterial color={isHighlighted ? '#15803D' : '#14532D'} />
      </mesh>

      {/* 2. Villa Ground Floor Volume */}
      <mesh position={[-0.2, 0.35, -0.1]}>
        <boxGeometry args={[1.6, 0.65, 1.5]} />
        <meshStandardMaterial color={baseColor} roughness={0.4} />
      </mesh>

      {/* 3. Split-Level Upper Volume with Balcony */}
      <mesh position={[-0.1, 0.82, -0.15]}>
        <boxGeometry args={[1.2, 0.5, 1.2]} />
        <meshStandardMaterial color="#F5F5F4" roughness={0.4} />
      </mesh>

      {/* 4. Rooftop Architectural Orange Pergola */}
      <mesh position={[-0.1, 1.1, -0.15]}>
        <boxGeometry args={[1.3, 0.06, 1.3]} />
        <meshStandardMaterial color={roofColor} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

function MasterplanModel({ activeSector = 'all' }) {
  const groupRef = useRef();

  // Representative Plotted Villa Coordinates (Balanced for Smooth Performance)
  const villaPlots = useMemo(() => {
    const plots = [];
    const rows = 10;
    const cols = 10;
    let count = 1;
    for (let r = -rows / 2; r < rows / 2; r++) {
      for (let c = -cols / 2; c < cols / 2; c++) {
        const x = c * 3.6 + (r % 2 === 0 ? 0.4 : -0.4);
        const z = r * 3.4;
        const dist = Math.hypot(x, z);
        // Reserve center for Clubhouse & central lawn
        if (dist > 6.5 && dist < 21.0 && Math.abs(x) > 1.6 && Math.abs(z) > 1.6) {
          if (plots.length < 48) {
            let sector = 'north';
            if (z > 2) sector = 'south';
            else if (Math.abs(z) <= 2 && Math.abs(x) < 11) sector = 'central';

            plots.push({
              id: `V-${String(count).padStart(3, '0')}`,
              x,
              z,
              sector,
              facing: c > 0 ? 'EAST' : 'WEST',
              number: count++
            });
          }
        }
      }
    }
    return plots;
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. 10-Acre Base Masterplan Terrain (Crisp Porcelain Plinth) */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[44, 0.2, 44]} />
        <meshStandardMaterial color="#F5F5F4" roughness={0.8} />
      </mesh>

      {/* 2. Perimeter Botanical Forest Buffer */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[18.5, 21.8, 36]} />
        <meshBasicMaterial color="#166534" />
      </mesh>

      {/* 3. 40-Foot Central Boulevard Spine (East-West) */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 2.2]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>

      {/* 4. 40-Foot North-South Connecting Boulevard Spine */}
      <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 40]} />
        <meshStandardMaterial color="#374151" roughness={0.8} />
      </mesh>

      {/* 5. Central Grand Security Roundabout Plinth */}
      <group position={[0, 0.04, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.4, 28]} />
          <meshStandardMaterial color="#FED7AA" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.9, 1.2, 0.4, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
        </mesh>
      </group>

      {/* 6. Central Resort Clubhouse Complex & 25m Pool */}
      <group position={[0, 0.06, -0.5]}>
        {/* Clubhouse Main Pavilion Building */}
        <mesh position={[0, 0.65, -3.2]}>
          <boxGeometry args={[6.8, 1.3, 3.8]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>

        {/* Clubhouse Rooftop Louver Canopy */}
        <mesh position={[0, 1.35, -3.2]}>
          <boxGeometry args={[7.2, 0.1, 4.2]} />
          <meshStandardMaterial color="#EA580C" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* 25-Meter Heated Lap Pool */}
        <mesh position={[0, 0.04, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8.0, 3.2]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.3} />
        </mesh>

        {/* Poolside Sun Deck */}
        <mesh position={[0, 0.05, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8.4, 0.8]} />
          <meshStandardMaterial color="#FED7AA" roughness={0.5} />
        </mesh>
      </group>

      {/* 7. Plotted Villas */}
      <group>
        {villaPlots.map((plot) => {
          const isHighlighted = activeSector === 'all' || activeSector === plot.sector;
          return <PlottedVilla key={plot.id} plot={plot} isHighlighted={isHighlighted} />;
        })}
      </group>
    </group>
  );
}

export default function Masterplan3D({ activeSector = 'all' }) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-full relative select-none bg-[#FAFAF9]">
      <Canvas
        camera={{ position: [0, 24, 26], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.4} color="#FFFFFF" />
        <directionalLight position={[18, 28, 18]} intensity={2.0} color="#FFF7ED" />
        <directionalLight position={[-14, 16, -14]} intensity={0.6} color="#E0F2FE" />

        <MasterplanModel activeSector={activeSector} />

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.0}
          enableRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.25}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* HUD Info Badges */}
      <div className="absolute top-3 left-3 pointer-events-none flex flex-col space-y-0.5 bg-white/95 backdrop-blur-md px-3 py-1.5 border border-gray-200 text-[#111827] text-[10.5px] font-mono shadow-xs rounded-xs">
        <div className="flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
          <span className="text-[#EA580C] font-semibold tracking-wider">10-Acre 3D Model</span>
        </div>
        <div className="text-[#6B7280] text-[9.5px]">360° Turntable · Drag To Explore</div>
      </div>

      {/* Auto-Rotate Toggle Button */}
      <button
        type="button"
        onClick={() => setAutoRotate(!autoRotate)}
        className="absolute top-3 right-3 z-10 bg-white/95 hover:bg-[#FFF7ED] active:scale-95 transition-all backdrop-blur-md px-2.5 py-1 border border-gray-200 text-[10px] font-mono tracking-wider text-[#111827] flex items-center space-x-1.5 shadow-xs cursor-pointer rounded-xs"
        title="Toggle 360° Auto-Rotation"
        aria-label="Toggle 360° Auto-Rotation"
      >
        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${autoRotate ? 'bg-[#EA580C] animate-pulse' : 'bg-gray-400'}`} />
        <span className="font-semibold text-[#111827]">{autoRotate ? 'Rotating' : 'Paused'}</span>
      </button>
    </div>
  );
}
