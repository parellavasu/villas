import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Procedural 3D Miniature Tree
function MiniTree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.04, 0.07, 0.7, 6]} />
        <meshStandardMaterial color="#5A4736" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <dodecahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial color="#2E5A44" roughness={0.7} />
      </mesh>
    </group>
  );
}

// Procedural 3D Luxury Villa with Private Garden & Plunge Pool
function PlottedVilla({ plot, isHighlighted }) {
  const baseColor = isHighlighted ? '#FFFFFF' : '#E8E4DC';
  const accentColor = isHighlighted ? '#C5A880' : '#A89E90';
  const roofColor = isHighlighted ? '#B89047' : '#9E886A';

  return (
    <group position={[plot.x, 0.06, plot.z]}>
      {/* 1. Private Landscaped Garden Yard */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 2.5]} />
        <meshStandardMaterial color={isHighlighted ? '#2B573E' : '#22382D'} roughness={0.8} />
      </mesh>

      {/* 2. Private Backyard Turquoise Plunge Pool */}
      <mesh position={[0.7, 0.02, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.85, 0.6]} />
        <meshStandardMaterial color="#1FAEC7" roughness={0.2} metalness={0.5} />
      </mesh>

      {/* 3. Villa Ground Floor Volume */}
      <mesh position={[-0.2, 0.35, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.65, 1.6]} />
        <meshStandardMaterial color={baseColor} roughness={0.4} />
      </mesh>

      {/* 4. Split-Level Upper Volume with Terrace Overhang */}
      <mesh position={[-0.1, 0.85, -0.15]} castShadow>
        <boxGeometry args={[1.3, 0.55, 1.3]} />
        <meshStandardMaterial color={accentColor} roughness={0.5} />
      </mesh>

      {/* 5. Balcony Glass Ribbon */}
      <mesh position={[-0.1, 0.72, 0.55]}>
        <boxGeometry args={[1.2, 0.22, 0.04]} />
        <meshPhysicalMaterial color="#A4C2B4" transparent opacity={0.7} roughness={0.1} />
      </mesh>

      {/* 6. Rooftop Architectural Pergola */}
      <mesh position={[-0.1, 1.15, -0.15]}>
        <boxGeometry args={[1.4, 0.06, 1.4]} />
        <meshStandardMaterial color={roofColor} roughness={0.4} metalness={0.2} />
      </mesh>

      {/* 7. Miniature Courtyard Palm Tree */}
      <MiniTree position={[-0.9, 0, 0.6]} scale={0.7} />
    </group>
  );
}

function MasterplanModel({ activeSector = 'all' }) {
  const groupRef = useRef();

  // 189 Plotted Villa Coordinates
  const villaPlots = useMemo(() => {
    const plots = [];
    const rows = 14;
    const cols = 14;
    let count = 1;
    for (let r = -rows / 2; r < rows / 2; r++) {
      for (let c = -cols / 2; c < cols / 2; c++) {
        const x = c * 3.4 + (r % 2 === 0 ? 0.35 : -0.35);
        const z = r * 3.2;
        const dist = Math.hypot(x, z);
        // Reserve center for Clubhouse & central lawn
        if (dist > 6.8 && dist < 23.5 && Math.abs(x) > 1.8 && Math.abs(z) > 1.8) {
          if (plots.length < 189) {
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
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* 1. 10-Acre Base Masterplan Terrain (Warm Sandstone Plinth) */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[54, 0.3, 54]} />
        <meshStandardMaterial color="#F3EFE6" roughness={0.7} />
      </mesh>

      {/* 2. Perimeter Protective Green Forest Canopy (Surrounding Trees) */}
      {[-25, 25].map((edgeX) =>
        [-24, -18, -12, -6, 0, 6, 12, 18, 24].map((z, i) => (
          <MiniTree key={`pt-x-${edgeX}-${i}`} position={[edgeX, 0, z]} scale={1.3} />
        ))
      )}
      {[-25, 25].map((edgeZ) =>
        [-24, -18, -12, -6, 0, 6, 12, 18, 24].map((x, i) => (
          <MiniTree key={`pt-z-${edgeZ}-${i}`} position={[x, 0, edgeZ]} scale={1.3} />
        ))
      )}

      {/* 3. Perimeter Boundary Wall with Subtle Gold Bevel */}
      <mesh position={[0, 0.2, 0]}>
        <ringGeometry args={[25.8, 26.2, 4]} />
        <meshStandardMaterial color="#C5A880" roughness={0.4} />
      </mesh>

      {/* 4. 40ft Main Boulevards (Paved Asphalt with Road Markings) */}
      {/* North-South Boulevard */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.2, 48]} />
        <meshStandardMaterial color="#4A524E" roughness={0.8} />
      </mesh>
      {/* East-West Boulevard */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[48, 3.2]} />
        <meshStandardMaterial color="#4A524E" roughness={0.8} />
      </mesh>
      {/* Boulevard White Centerlines */}
      <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.1, 48]} />
        <meshBasicMaterial color="#FAF9F5" />
      </mesh>
      <mesh position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[48, 0.1]} />
        <meshBasicMaterial color="#FAF9F5" />
      </mesh>

      {/* 5. Central Boulevard Entry Roundabout with Palm Oasis */}
      <group position={[0, 0.03, 23]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.6, 32]} />
          <meshStandardMaterial color="#4A524E" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.4, 32]} />
          <meshStandardMaterial color="#2B573E" roughness={0.7} />
        </mesh>
        <MiniTree position={[0, 0, 0]} scale={1.4} />
      </group>

      {/* 6. Central Signature 15,000 Sq.Ft Clubhouse & Resort Water Pavilion */}
      <group position={[0, 0.04, 0]}>
        {/* Manicured Central Clubhouse Green Lawn */}
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[12, 10]} />
          <meshStandardMaterial color="#316345" roughness={0.7} />
        </mesh>

        {/* Clubhouse Main Pavilion */}
        <mesh position={[0, 0.8, -1.8]} castShadow receiveShadow>
          <boxGeometry args={[8.2, 1.6, 4.4]} />
          <meshStandardMaterial color="#FAF9F6" roughness={0.3} />
        </mesh>

        {/* Clubhouse Terracotta Crown */}
        <mesh position={[0, 1.7, -1.8]}>
          <boxGeometry args={[8.6, 0.2, 4.8]} />
          <meshStandardMaterial color="#B89047" roughness={0.4} />
        </mesh>

        {/* Double-Height Glass Facade */}
        <mesh position={[0, 0.8, 0.42]}>
          <planeGeometry args={[6.8, 1.3]} />
          <meshPhysicalMaterial color="#A4C2B4" transparent opacity={0.8} roughness={0.1} />
        </mesh>

        {/* Shimmering 25m Lap Pool */}
        <mesh position={[0, 0.06, 2.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[7.6, 3.2]} />
          <meshStandardMaterial color="#1EB5D9" roughness={0.15} metalness={0.4} />
        </mesh>

        {/* Poolside Sun Deck */}
        <mesh position={[0, 0.05, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8.4, 0.8]} />
          <meshStandardMaterial color="#C5A880" roughness={0.5} />
        </mesh>

        {/* Tennis / Pickleball Sports Court */}
        <group position={[4.6, 0.05, 2.8]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[2.2, 3.4]} />
            <meshStandardMaterial color="#2B6B98" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.08, 0]}>
            <boxGeometry args={[2.0, 0.15, 0.04]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Warm Clubhouse Ambient Glow */}
        <pointLight position={[0, 2.5, 0]} color="#FFF0D4" intensity={3.5} distance={15} />
      </group>

      {/* 7. 189 Plotted Villas */}
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
    <div className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] relative select-none bg-[#FAFAF7]">
      <Canvas
        camera={{ position: [0, 26, 28], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} color="#FFFDF9" />
        <directionalLight position={[20, 32, 20]} intensity={2.2} color="#FFF8EE" castShadow />
        <directionalLight position={[-16, 18, -16]} intensity={0.6} color="#DCEEE5" />

        <MasterplanModel activeSector={activeSector} />

        <OrbitControls
          autoRotate={autoRotate}
          autoRotateSpeed={1.2}
          enableRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.25}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* HUD Info Badges */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col space-y-1 bg-white/95 backdrop-blur-md px-3.5 py-2 border border-[#C5A880]/40 text-[#1D2421] text-[11px] font-mono shadow-md">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#B89047] animate-pulse" />
          <span className="text-[#B89047] font-semibold tracking-wider uppercase">10-ACRE 3D ARCHITECTURAL MODEL</span>
        </div>
        <div className="text-[#5A6862] text-[10px]">360° TURNTABLE · DRAG TO EXPLORE SECTORS</div>
      </div>

      {/* Auto-Rotate Toggle Button */}
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
