import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function Silk({ color, position, rotation, speed, scale = 1 }: {
  color: string; position: [number, number, number]; rotation: [number, number, number]; speed: number; scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => new THREE.PlaneGeometry(2.4, 3.6, 48, 64), []);
  const basePositions = useMemo(() => {
    const arr = geom.attributes.position.array as Float32Array;
    return new Float32Array(arr);
  }, [geom]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    const pos = geom.attributes.position;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const x = basePositions[i];
      const y = basePositions[i + 1];
      arr[i + 2] =
        Math.sin(x * 1.5 + t) * 0.18 +
        Math.cos(y * 1.2 + t * 0.8) * 0.15 +
        Math.sin((x + y) * 0.8 + t * 1.2) * 0.08;
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    if (ref.current) {
      const mx = state.pointer.x;
      const my = state.pointer.y;
      ref.current.rotation.x = rotation[0] + my * 0.15;
      ref.current.rotation.y = rotation[1] + mx * 0.25 + Math.sin(t * 0.5) * 0.05;
      ref.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <mesh ref={ref} geometry={geom} position={position} rotation={rotation} scale={scale}>
      <meshPhysicalMaterial
        color={color}
        side={THREE.DoubleSide}
        roughness={0.35}
        metalness={0.55}
        sheen={1}
        sheenColor={new THREE.Color("#F7E7CE")}
        sheenRoughness={0.3}
        clearcoat={0.5}
        clearcoatRoughness={0.4}
        emissive={new THREE.Color(color)}
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}

function GoldParticles() {
  const ref = useRef<THREE.Points>(null);
  const { positions, count } = useMemo(() => {
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return { positions, count };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.0015;
      arr[i * 3] += Math.cos(t * 0.2 + i) * 0.001;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#D4AF37"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0F0F0F"]} />
      <fog attach="fog" args={["#0F0F0F", 6, 14]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={2.2} color="#F7E7CE" />
      <pointLight position={[-4, 2, 3]} intensity={2} color="#D4AF37" />
      <pointLight position={[4, -3, 2]} intensity={1.4} color="#C9A227" />

      <Silk color="#8B0000" position={[-2.2, 0.3, -0.5]} rotation={[0.1, 0.4, -0.1]} speed={0.6} scale={1.05} />
      <Silk color="#D4AF37" position={[0, -0.2, 0.2]} rotation={[-0.05, -0.15, 0.05]} speed={0.8} scale={1.2} />
      <Silk color="#3B1F2B" position={[2.4, 0.4, -0.7]} rotation={[0.05, -0.5, 0.1]} speed={0.7} scale={1.05} />
      <Silk color="#F7E7CE" position={[-3.5, -1.5, -1.5]} rotation={[0, 0.6, 0.2]} speed={0.5} scale={0.8} />
      <Silk color="#5C0E1F" position={[3.6, -1.6, -1.6]} rotation={[0, -0.7, -0.2]} speed={0.55} scale={0.8} />

      <GoldParticles />
    </>
  );
}

export function SilkScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 50 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}