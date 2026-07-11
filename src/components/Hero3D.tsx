"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function FloatingShapes() {
  const shapes = [
    { position: [-2.2, 0.6, -1] as [number, number, number], scale: 0.7, color: "#818cf8" },
    { position: [2.4, -0.4, -2] as [number, number, number], scale: 1.0, color: "#22d3ee" },
    { position: [0.5, 1.4, -3] as [number, number, number], scale: 0.55, color: "#a78bfa" },
    { position: [-1.6, -1.3, -1.5] as [number, number, number], scale: 0.45, color: "#38bdf8" },
  ];

  return (
    <>
      {shapes.map((s, i) => (
        <Float
          key={i}
          speed={1.2 + i * 0.2}
          rotationIntensity={1.2}
          floatIntensity={1.6}
        >
          <Icosahedron args={[s.scale, 0]} position={s.position}>
            <meshStandardMaterial
              color={s.color}
              wireframe
              emissive={s.color}
              emissiveIntensity={0.4}
            />
          </Icosahedron>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
