import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function SurveyScene({ isDigital = true }) {
  const pointsRef = useRef();
  const gridRef = useRef();

  // Generate 10-acre LIDAR point cloud & elevation markers
  const { pointData, contourLines, surveyPins } = useMemo(() => {
    const points = [];
    const colors = [];
    const rows = 40;
    const cols = 40;
    const size = 30;

    for (let i = 0; i <= rows; i++) {
      for (let j = 0; j <= cols; j++) {
        const x = (i / rows - 0.5) * size;
        const z = (j / cols - 0.5) * size;
        // 12m natural slope contour
        const y = Math.sin(x * 0.2) * 1.5 + Math.cos(z * 0.15) * 1.2 + (x * 0.1);
        points.push(x, y, z);

        // Gradient color: Cyan to Emerald for digital, earthy stone for real
        if (isDigital) {
          const normY = (y + 2.5) / 5.0;
          colors.push(0.2, 0.6 + normY * 0.4, 0.7 + normY * 0.3);
        } else {
          colors.push(0.15, 0.22, 0.17);
        }
      }
    }

    // Contour isoline loops at distinct heights
    const contours = [];
    [-1.0, 0.0, 1.0, 2.0].forEach((height) => {
      const linePts = [];
      for (let a = 0; a <= Math.PI * 2; a += 0.2) {
        const r = 12 + Math.sin(a * 4) * 2;
        linePts.push(new THREE.Vector3(Math.cos(a) * r, height, Math.sin(a) * r));
      }
      contours.push(linePts);
    });

    // 6 Key DGPS Survey Anchor Pins
    const pins = [
      { id: 'DP-01', pos: [-12, 0.8, -10], label: 'DGPS-NORTH: 928.4m', note: 'Primary Geodetic Benchmark' },
      { id: 'DP-02', pos: [11, 2.4, -9], label: 'DGPS-EAST: 932.1m', note: 'High Elevation Ridge' },
      { id: 'DP-03', pos: [-9, -0.4, 11], label: 'DGPS-SOUTH: 918.2m', note: 'Natural Swale & Inflow' },
      { id: 'DP-04', pos: [12, 1.2, 10], label: 'DGPS-WEST: 924.5m', note: 'Main Boulevard Portal' },
      { id: 'DP-05', pos: [0, 0.9, 0], label: 'DGPS-CENTRAL: 926.0m', note: 'Clubhouse Datum Center' },
    ];

    return {
      pointData: {
        positions: new Float32Array(points),
        colors: new Float32Array(colors)
      },
      contourLines: contours,
      surveyPins: pins
    };
  }, [isDigital]);

  const [activePin, setActivePin] = useState(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.rotation.y = t * 0.04;
    }
  });

  return (
    <group ref={gridRef}>
      {/* Dynamic LIDAR Point Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pointData.positions.length / 3}
            array={pointData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={pointData.colors.length / 3}
            array={pointData.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isDigital ? 0.15 : 0.08}
          vertexColors
          transparent
          opacity={isDigital ? 0.9 : 0.6}
        />
      </points>

      {/* Wireframe Contour Grid */}
      {isDigital && (
        <mesh position={[0, -0.05, 0]}>
          <planeGeometry args={[30, 30, 40, 40]} />
          <meshBasicMaterial
            color="#274B39"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      )}

      {/* Topographic Isolines */}
      {contourLines.map((line, idx) => {
        const geom = new THREE.BufferGeometry().setFromPoints(line);
        return (
          <lineLoop key={idx} geometry={geom}>
            <lineBasicMaterial
              color={isDigital ? "#BA996E" : "#4D6F5B"}
              linewidth={1.5}
              transparent
              opacity={0.65}
            />
          </lineLoop>
        );
      })}

      {/* DGPS Survey Beacons with Beaming Light */}
      {surveyPins.map((pin) => (
        <group key={pin.id} position={pin.pos}>
          {/* Beacon Base */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.08, 0.16, 0.8, 8]} />
            <meshStandardMaterial color="#BA996E" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Pulsing Signal Head */}
          <mesh
            position={[0, 0.9, 0]}
            onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
            className="cursor-pointer"
          >
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshBasicMaterial color={isDigital ? "#38BDF8" : "#BA996E"} />
          </mesh>
          {/* Vertical Laser Projection Beam */}
          {isDigital && (
            <mesh position={[0, 4, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 7, 6]} />
              <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} />
            </mesh>
          )}

          {/* Interactive HTML Survey Tag */}
          <Html position={[0, 1.3, 0]} center distanceFactor={14}>
            <div
              onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
              className="bg-charcoal-900/90 backdrop-blur-md border border-bronze-500/40 text-ivory-100 px-2 py-1 rounded text-[10px] font-mono tracking-wider whitespace-nowrap cursor-pointer hover:border-bronze-400 transition-all shadow-lg"
            >
              <span className="text-bronze-400 font-bold">{pin.id}</span> | {pin.label.split(':')[1]}
              {activePin === pin.id && (
                <div className="mt-1 text-[9px] text-stone-400 border-t border-white/10 pt-1">
                  {pin.note}
                </div>
              )}
            </div>
          </Html>
        </group>
      ))}

      {/* Site Boundary Frame */}
      <lineLoop>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={5}
            array={new Float32Array([
              -15, 0.5, -15,
               15, 1.8, -15,
               15, 2.5,  15,
              -15, -0.2, 15,
              -15, 0.5, -15
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#BA996E" linewidth={2} />
      </lineLoop>
    </group>
  );
}

export default function TopoTerrainMesh() {
  const [isDigital, setIsDigital] = useState(true);

  return (
    <div className="w-full h-[520px] relative rounded-2xl overflow-hidden border border-white/10 bg-charcoal-950 shadow-2xl">
      <Canvas
        camera={{ position: [20, 16, 22], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[20, 30, 15]} intensity={1.2} color="#F3EFE8" />
        <directionalLight position={[-15, 10, -15]} intensity={0.4} color="#38BDF8" />
        <SurveyScene isDigital={isDigital} />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 6} />
      </Canvas>

      {/* Interactive Control Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center space-x-2 bg-charcoal-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-stone-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>MULTI-SPECTRAL LIDAR SCAN (10 ACRES)</span>
        </div>

        <button
          onClick={() => setIsDigital(!isDigital)}
          className="pointer-events-auto bg-charcoal-900/90 hover:bg-forest-900/80 transition-colors border border-bronze-500/40 text-ivory-100 text-xs font-mono uppercase px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg"
        >
          <span className="text-bronze-400">MODE:</span>
          <span className="font-semibold">{isDigital ? "DIGITAL SITE MODEL" : "REAL LAND STRATA"}</span>
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-stone-400 pointer-events-none">
        <span>DRAG TO ROTATE 3D SURVEY</span>
        <span>CLICK PINS FOR FIELD DATA</span>
      </div>
    </div>
  );
}
