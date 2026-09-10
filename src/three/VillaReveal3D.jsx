import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const STAGES = [
  { id: 1, name: 'SITE BOUNDARY', desc: 'Perimeter demarcation and survey grid' },
  { id: 2, name: 'GROUND PLINTH', desc: 'Excavation and travertine foundation base' },
  { id: 3, name: 'COLUMNS & FOOTINGS', desc: 'Structural reinforced concrete columns' },
  { id: 4, name: 'LOWER WALLS', desc: 'Ground-floor limestone walls and core partitions' },
  { id: 5, name: 'UPPER FLOOR SLAB', desc: 'Cantilevered first-floor structural deck' },
  { id: 6, name: 'UPPER WALLS & TEAK LOUVERS', desc: 'Master suite volumes and privacy timber screens' },
  { id: 7, name: 'ROOF SLAB & COPING', desc: 'Architectural flat roof with deep overhangs' },
  { id: 8, name: 'LOW-E GLAZING', desc: 'Floor-to-ceiling glass and terrace balustrades' },
  { id: 9, name: 'LAWN & PAVERS', desc: 'Manicured green lawn and stone paver driveway' },
  { id: 10, name: 'TREES & GARDEN', desc: 'Native frangipani trees and tropical foliage' },
  { id: 11, name: 'FINAL LIGHTING & REVEAL', desc: 'Warm interior cove lights and completed villa' },
];

function VillaConstructionModel({ stage = 11 }) {
  const groupRef = useRef();

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      // Gentle slow camera orbit responsiveness
      const t = clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08 + (pointer.x * 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* 1. SITE BOUNDARY SURVEY LINES */}
      {stage >= 1 && (
        <group position={[0, 0.02, 0]}>
          <lineLoop>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={5}
                array={new Float32Array([
                  -12, 0, -10,
                   12, 0, -10,
                   12, 0,  10,
                  -12, 0,  10,
                  -12, 0, -10
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={stage >= 2 ? "#AEA89B" : "#31483D"} linewidth={2} />
          </lineLoop>
          {/* Survey Corner Pegs */}
          {[[-12, -10], [12, -10], [12, 10], [-12, 10]].map(([px, pz], i) => (
            <mesh key={i} position={[px, 0.3, pz]}>
              <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
              <meshBasicMaterial color="#B8A58A" />
            </mesh>
          ))}
        </group>
      )}

      {/* 2. GROUND PLINTH & DRIVEWAY */}
      {stage >= 2 && (
        <group position={[0, 0.15, 0]}>
          {/* Main Villa Plinth Slab */}
          <mesh position={[0, 0, -0.5]} receiveShadow>
            <boxGeometry args={[18, 0.3, 14]} />
            <meshStandardMaterial color="#EFECE6" roughness={0.75} />
          </mesh>
          {/* Paver Driveway Entry */}
          <mesh position={[-2, 0.02, 7]} receiveShadow>
            <boxGeometry args={[4, 0.06, 6]} />
            <meshStandardMaterial color="#D8D4CA" roughness={0.8} />
          </mesh>
        </group>
      )}

      {/* 3. STRUCTURAL COLUMNS & CORE FOOTINGS */}
      {stage >= 3 && (
        <group position={[0, 0.3, 0]}>
          {[
            [-7, -5], [-7, 0], [-7, 5],
            [-2, -5], [-2, 5],
            [3, -5], [3, 0], [3, 5],
            [8, -5], [8, 5]
          ].map(([cx, cz], idx) => (
            <mesh key={idx} position={[cx, 1.6, cz]} castShadow>
              <boxGeometry args={[0.45, 3.2, 0.45]} />
              <meshStandardMaterial color="#B8A58A" roughness={0.5} />
            </mesh>
          ))}
        </group>
      )}

      {/* 4. GROUND FLOOR LIMESTONE WALLS */}
      {stage >= 4 && (
        <group position={[0, 0.3, 0]}>
          {/* Rear Wall */}
          <mesh position={[0, 1.6, -5.2]} castShadow receiveShadow>
            <boxGeometry args={[16.2, 3.2, 0.4]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.7} />
          </mesh>
          {/* Left Wall */}
          <mesh position={[-7.8, 1.6, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.4, 3.2, 10.8]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.7} />
          </mesh>
          {/* Right Wall */}
          <mesh position={[7.8, 1.6, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.4, 3.2, 10.8]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.7} />
          </mesh>
          {/* Travertine Entrance Pier */}
          <mesh position={[2.2, 1.6, 5.2]} castShadow receiveShadow>
            <boxGeometry args={[1.2, 3.2, 0.6]} />
            <meshStandardMaterial color="#DDD8CE" roughness={0.6} />
          </mesh>
        </group>
      )}

      {/* 5. UPPER FLOOR SLAB & SPLIT-LEVEL DECK */}
      {stage >= 5 && (
        <mesh position={[0, 3.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[18.4, 0.35, 14.4]} />
          <meshStandardMaterial color="#EFECE6" roughness={0.65} />
        </mesh>
      )}

      {/* 6. UPPER FLOOR WALLS & TEAK WOOD PRIVACY LOUVERS */}
      {stage >= 6 && (
        <group position={[0, 3.75, 0]}>
          {/* Master Bedroom Volume */}
          <mesh position={[2.5, 1.4, 0.2]} castShadow receiveShadow>
            <boxGeometry args={[10.5, 2.8, 11.2]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.65} />
          </mesh>
          {/* Upper Rear Wall */}
          <mesh position={[-4, 1.4, -4.5]} castShadow receiveShadow>
            <boxGeometry args={[6.5, 2.8, 0.4]} />
            <meshStandardMaterial color="#EFECE6" roughness={0.7} />
          </mesh>
          {/* Natural Teak Wood Louver Screen */}
          <group position={[-5.5, 1.4, 4.8]}>
            {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((lx, i) => (
              <mesh key={i} position={[lx, 0, 0]} castShadow>
                <boxGeometry args={[0.08, 2.6, 0.3]} />
                <meshStandardMaterial color="#B8A58A" roughness={0.4} />
              </mesh>
            ))}
          </group>
        </group>
      )}

      {/* 7. ARCHITECTURAL COPING ROOF & OVERHANGS */}
      {stage >= 7 && (
        <mesh position={[0, 6.7, 0]} castShadow>
          <boxGeometry args={[19.6, 0.35, 15.6]} />
          <meshStandardMaterial color="#31483D" roughness={0.5} />
        </mesh>
      )}

      {/* 8. LOW-E GLASS WALLS & BALUSTRADES */}
      {stage >= 8 && (
        <group>
          {/* Double-Height Entrance Glass */}
          <mesh position={[-0.8, 2.6, 5.3]}>
            <planeGeometry args={[4.2, 4.8]} />
            <meshPhysicalMaterial
              color="#A4C2B4"
              transmission={0.7}
              opacity={0.85}
              transparent
              roughness={0.1}
              metalness={0.15}
            />
          </mesh>
          {/* Master Balcony Glass Railing */}
          <mesh position={[4.5, 4.3, 5.8]}>
            <boxGeometry args={[6.5, 0.9, 0.05]} />
            <meshPhysicalMaterial color="#C5DCD2" transparent opacity={0.6} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* 9. MANICURED LAWN & POROUS PATHWAYS */}
      {stage >= 9 && (
        <group position={[0, 0.05, 0]}>
          {/* Private Garden Lawn */}
          <mesh position={[0, 0.02, 5.8]} receiveShadow>
            <boxGeometry args={[20, 0.06, 6.5]} />
            <meshStandardMaterial color="#557A64" roughness={0.9} />
          </mesh>
          {/* Stepping Stones to Garden */}
          {[-4, -2, 0, 2, 4].map((sx, i) => (
            <mesh key={i} position={[sx, 0.06, 7]} receiveShadow>
              <boxGeometry args={[1.2, 0.04, 0.8]} />
              <meshStandardMaterial color="#D8D4CA" roughness={0.7} />
            </mesh>
          ))}
        </group>
      )}

      {/* 10. TREES & GARDEN LANDSCAPING */}
      {stage >= 10 && (
        <group>
          {[
            { x: -9, z: 6, scale: 1.1 },
            { x: -8, z: -6, scale: 0.9 },
            { x: 9, z: 6, scale: 1.0 },
            { x: 8, z: -6, scale: 1.2 },
            { x: 0, z: 9, scale: 0.75 },
          ].map((tree, i) => (
            <group key={i} position={[tree.x, 0.2, tree.z]} scale={tree.scale}>
              {/* Trunk */}
              <mesh position={[0, 1.2, 0]} castShadow>
                <cylinderGeometry args={[0.15, 0.25, 2.4, 8]} />
                <meshStandardMaterial color="#5C5042" roughness={0.9} />
              </mesh>
              {/* Canopy */}
              <mesh position={[0, 2.8, 0]} castShadow>
                <sphereGeometry args={[1.4, 12, 12]} />
                <meshStandardMaterial color={i % 2 === 0 ? "#436553" : "#365344"} roughness={0.8} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 11. WARM ARCHITECTURAL INTERIOR LIGHTING */}
      {stage >= 11 && (
        <group>
          <pointLight position={[-1, 2.2, 2]} color="#FFE8D0" intensity={3.5} distance={12} />
          <pointLight position={[3, 5.0, 2]} color="#FFE8D0" intensity={2.8} distance={10} />
          <pointLight position={[2, 1.2, 5.4]} color="#FFDFBA" intensity={1.8} distance={6} />
        </group>
      )}
    </group>
  );
}

export default function VillaReveal3D() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatic construction sequence
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev >= 11) {
          return 11; // Pause on complete villa
        }
        return prev + 1;
      });
    }, 1600); // 1.6s per stage for clear visibility

    return () => clearInterval(interval);
  }, [isPlaying]);

  const restartConstruction = () => {
    setCurrentStage(1);
    setIsPlaying(true);
  };

  const activeStageInfo = STAGES[currentStage - 1] || STAGES[10];

  return (
    <div className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] relative flex flex-col justify-between select-none">
      
      {/* 3D Canvas Viewport */}
      <div className="w-full h-full absolute inset-0">
        <Canvas
          camera={{ position: [0, 8, 22], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={1.0} color="#FFFDF9" />
          <directionalLight
            position={[14, 22, 14]}
            intensity={1.8}
            color="#FFF8EE"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-10, 12, -10]} intensity={0.5} color="#D4E4DC" />

          <VillaConstructionModel stage={currentStage} />
          
          <OrbitControls
            enableRotate={true}
            enableZoom={true}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={14}
            maxDistance={36}
          />
        </Canvas>
      </div>

      {/* Top HUD: Current Stage Name & Real-Time Construction Badge */}
      <div className="relative z-10 p-4 sm:p-5 flex items-start justify-between pointer-events-none">
        <div className="bg-ivory-100/90 backdrop-blur-md px-3.5 py-2 border border-stone-300/80 shadow-subtle">
          <div className="flex items-center space-x-2">
            <span className={`w-2 h-2 rounded-full ${currentStage < 11 ? 'bg-amber-600 animate-ping' : 'bg-forest-700'}`} />
            <span className="text-[10px] font-mono tracking-widest text-forest-700 uppercase font-semibold">
              {currentStage < 11 ? 'CONSTRUCTION IN PROGRESS' : 'ARCHITECTURAL REVEAL COMPLETE'}
            </span>
          </div>
          <div className="text-[15px] font-sans font-semibold text-charcoal-900 mt-0.5">
            Stage {String(currentStage).padStart(2, '0')} / 11 · {activeStageInfo.name}
          </div>
          <div className="text-[11.5px] text-charcoal-600 font-sans">
            {activeStageInfo.desc}
          </div>
        </div>

        {/* Orbit Hint */}
        <div className="hidden sm:block text-[10px] font-mono text-charcoal-500 bg-white/70 backdrop-blur-md px-2.5 py-1 border border-stone-300/60 uppercase">
          DRAG TO ROTATE · SCROLL TO ZOOM
        </div>
      </div>

      {/* Bottom Control Bar: Progress Scrubber + Stage Buttons */}
      <div className="relative z-10 p-4 sm:p-5">
        {/* Progress Bar Line */}
        <div className="w-full h-[3px] bg-stone-300/80 mb-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-forest-700 transition-all duration-300 ease-out"
            style={{ width: `${(currentStage / 11) * 100}%` }}
          />
        </div>

        <div className="bg-ivory-100/95 backdrop-blur-md p-2.5 border border-stone-300/80 shadow-subtle flex flex-wrap items-center justify-between gap-2">
          
          {/* 11 Stage Mini-Pills */}
          <div className="flex items-center space-x-1 overflow-x-auto py-0.5">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentStage(s.id);
                  setIsPlaying(false);
                }}
                className={`w-6 h-6 rounded-xs text-[10px] font-mono font-semibold transition-all ${
                  currentStage === s.id
                    ? 'bg-forest-700 text-white shadow-subtle'
                    : currentStage > s.id
                    ? 'bg-stone-200 text-charcoal-800'
                    : 'bg-stone-100 text-stone-400 hover:text-charcoal-700'
                }`}
                title={s.name}
              >
                {s.id}
              </button>
            ))}
          </div>

          {/* Action Buttons: Play/Pause/Replay */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-wider bg-stone-200/80 hover:bg-stone-300/80 text-charcoal-800 rounded-xs transition-colors"
            >
              {isPlaying ? 'PAUSE' : 'PLAY REVEAL'}
            </button>
            <button
              onClick={restartConstruction}
              className="px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-wider bg-forest-700 hover:bg-forest-800 text-white rounded-xs transition-colors font-semibold"
            >
              REPLAY
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
