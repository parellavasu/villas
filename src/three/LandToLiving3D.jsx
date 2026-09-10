import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function DevelopmentScene({ step = 1 }) {
  const groupRef = useRef();

  // 189 Plotted Villa Coordinates
  const villaPlots = useMemo(() => {
    const plots = [];
    const rows = 14;
    const cols = 14;
    let count = 1;
    for (let r = -rows / 2; r < rows / 2; r++) {
      for (let c = -cols / 2; c < cols / 2; c++) {
        const x = c * 3.4 + (r % 2 === 0 ? 0.3 : -0.3);
        const z = r * 3.2;
        const dist = Math.hypot(x, z);
        if (dist > 6.5 && dist < 23 && Math.abs(x) > 1.6 && Math.abs(z) > 1.6) {
          if (plots.length < 189) {
            plots.push({ id: count++, x, z });
          }
        }
      }
    }
    return plots;
  }, []);

  // Trees Coordinates
  const treePositions = useMemo(() => {
    const trees = [];
    for (let i = 0; i < 75; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 7 + Math.random() * 16;
      trees.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        scale: 0.7 + Math.random() * 0.5
      });
    }
    return trees;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* 1. THE LAND — Raw Topographic Ground Plate */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <planeGeometry args={[52, 52, 32, 32]} />
        <meshStandardMaterial
          color={step === 1 ? "#C7C2B6" : step >= 6 ? "#25372E" : "#17201C"}
          roughness={0.9}
        />
      </mesh>

      {/* Elevation Contour Lines (Prominent in Step 1 & 2) */}
      {step <= 3 && (
        <gridHelper
          args={[50, 25, step === 1 ? "#8A775E" : "#31483D", step === 1 ? "#AEA89B" : "#202E27"]}
          position={[0, 0.01, 0]}
        />
      )}

      {/* 2. PREPARATION — Graded Boundary Ribbon & Clearing Buffer */}
      {step >= 2 && (
        <lineLoop position={[0, 0.04, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={5}
              array={new Float32Array([
                -24, 0.04, -24,
                 24, 0.04, -24,
                 24, 0.04,  24,
                -24, 0.04,  24,
                -24, 0.04, -24
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#B8A58A" linewidth={2} />
        </lineLoop>
      )}

      {/* 3. THE MASTERPLAN — Traced CAD Drafting Grid */}
      {step >= 3 && (
        <group position={[0, 0.03, 0]}>
          <gridHelper args={[48, 36, "#B8A58A", "#2E3F36"]} />
        </group>
      )}

      {/* 4. INFRASTRUCTURE — 40ft Boulevard & 30ft Roads */}
      {step >= 4 && (
        <group position={[0, 0.05, 0]}>
          {/* North-South 40ft Central Boulevard */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.2, 46]} />
            <meshBasicMaterial color={step >= 6 ? "#38473F" : "#B8A58A"} />
          </mesh>
          {/* East-West Avenue */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[46, 3.2]} />
            <meshBasicMaterial color={step >= 6 ? "#38473F" : "#B8A58A"} />
          </mesh>
        </group>
      )}

      {/* 5. THE VILLAS — 189 Residences Rising From Ground */}
      {step >= 5 && (
        <group>
          {villaPlots.map((plot) => (
            <group key={plot.id} position={[plot.x, 0.08, plot.z]}>
              {/* Private Garden Footprint */}
              <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2.7, 2.5]} />
                <meshBasicMaterial color={step >= 6 ? "#31483D" : "#24332B"} />
              </mesh>
              {/* Villa Volume */}
              <mesh position={[0, 0.35, 0]} castShadow>
                <boxGeometry args={[1.9, 0.6, 1.7]} />
                <meshStandardMaterial color={step >= 8 ? "#FAF9F6" : "#EFECE6"} roughness={0.6} />
              </mesh>
              {/* Roof */}
              <mesh position={[0, 0.7, 0]}>
                <boxGeometry args={[2.05, 0.1, 1.85]} />
                <meshStandardMaterial color="#B8A58A" roughness={0.4} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 6. THE LANDSCAPE — Biophilic Green Canopy */}
      {step >= 6 && (
        <group>
          {treePositions.map((t, idx) => (
            <group key={idx} position={[t.x, 0.1, t.z]} scale={t.scale}>
              <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.1, 0.15, 1.6, 6]} />
                <meshStandardMaterial color="#5C5042" />
              </mesh>
              <mesh position={[0, 1.8, 0]}>
                <sphereGeometry args={[0.9, 8, 8]} />
                <meshStandardMaterial color={idx % 2 === 0 ? "#406B52" : "#31483D"} roughness={0.8} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* 7. THE COMMUNITY — 15,000 Sq.Ft Clubhouse & Lap Pool */}
      {step >= 7 && (
        <group position={[0, 0.06, 0]}>
          {/* Pavilion Volume */}
          <mesh position={[0, 0.7, 0]} castShadow>
            <boxGeometry args={[7.5, 1.3, 5.0]} />
            <meshStandardMaterial color="#FAF9F6" roughness={0.5} />
          </mesh>
          {/* Azure Lap Pool */}
          <mesh position={[0, 0.08, 4.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[6.5, 2.5]} />
            <meshBasicMaterial color="#3BA99C" />
          </mesh>
          {/* Warm Lighting Glow */}
          <pointLight position={[0, 2, 0]} color="#FFE8D0" intensity={3} distance={15} />
        </group>
      )}

      {/* 8. THE FINAL VIEW — Warm Evening Lighting & Golden Hour Atmosphere */}
      {step >= 8 && (
        <group>
          <pointLight position={[-10, 8, -10]} color="#FFDCA8" intensity={2} distance={30} />
          <pointLight position={[10, 8, 10]} color="#FFE8D0" intensity={2.5} distance={30} />
        </group>
      )}
    </group>
  );
}

export default function LandToLiving3D({ step = 1 }) {
  return (
    <div className="w-full h-full min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] relative select-none">
      <Canvas
        camera={{ position: [0, 30, 26], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={step === 8 ? 1.4 : 1.1} color="#FFF8EE" />
        <directionalLight position={[16, 26, 16]} intensity={step === 8 ? 2.0 : 1.5} color="#FAF9F6" />
        <directionalLight position={[-16, 16, -16]} intensity={0.5} color="#8DA99C" />

        <DevelopmentScene step={step} />
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.3}
          minDistance={18}
          maxDistance={46}
        />
      </Canvas>

      {/* Interactive Drag Hint */}
      <div className="absolute top-4 right-4 pointer-events-none text-[10px] font-mono text-stone-400 bg-charcoal-950/80 backdrop-blur-md px-2.5 py-1 border border-stone-400/20 uppercase">
        DRAG TO ROTATE · SCROLL TO ZOOM
      </div>
    </div>
  );
}
