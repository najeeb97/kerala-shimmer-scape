import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function SilkWave() {
  const ref = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => new THREE.PlaneGeometry(14, 8, 140, 80), []);
  const base = useMemo(
    () => new Float32Array(geom.attributes.position.array as Float32Array),
    [geom]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const arr = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      arr[i + 2] =
        Math.sin(x * 0.5 + t * 0.7) * 0.5 +
        Math.cos(y * 0.4 + t * 0.5) * 0.4 +
        Math.sin((x + y) * 0.3 + t * 0.9) * 0.25;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    if (ref.current) {
      ref.current.rotation.x = -0.8 + Math.sin(t * 0.2) * 0.05;
      ref.current.rotation.z = Math.cos(t * 0.15) * 0.05;
    }
  });

  return (
    <mesh ref={ref} geometry={geom} position={[0, -1.5, 0]}>
      <meshPhysicalMaterial
        color="#1a0f0a"
        side={THREE.DoubleSide}
        roughness={0.25}
        metalness={0.9}
        sheen={1}
        sheenColor={new THREE.Color("#D4AF37")}
        sheenRoughness={0.25}
        clearcoat={1}
        clearcoatRoughness={0.2}
        emissive={new THREE.Color("#3a2410")}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function GoldOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    ref.current.position.y = 1.4 + Math.sin(t * 0.4) * 0.15;
  });
  return (
    <mesh ref={ref} position={[2.5, 1.4, -1]}>
      <icosahedronGeometry args={[0.8, 2]} />
      <meshPhysicalMaterial
        color="#D4AF37"
        metalness={1}
        roughness={0.18}
        clearcoat={1}
        emissive={new THREE.Color("#C9A227")}
        emissiveIntensity={0.45}
      />
    </mesh>
  );
}

function Filigree() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.08;
  });
  return (
    <mesh ref={ref} position={[-2.8, 0.6, -1.2]} scale={1.6}>
      <torusKnotGeometry args={[0.7, 0.06, 220, 24, 3, 5]} />
      <meshPhysicalMaterial
        color="#F7E7CE"
        metalness={1}
        roughness={0.2}
        emissive={new THREE.Color("#D4AF37")}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function Embers() {
  const ref = useRef<THREE.Points>(null);
  const { positions, count } = useMemo(() => {
    const count = 320;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
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
      arr[i * 3 + 1] += 0.004 + Math.sin(t * 0.5 + i) * 0.001;
      arr[i * 3] += Math.cos(t * 0.3 + i) * 0.0012;
      if (arr[i * 3 + 1] > 5) arr[i * 3 + 1] = -5;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#F7C76A"
        transparent
        opacity={0.9}
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
      <color attach="background" args={["#0a0604"]} />
      <fog attach="fog" args={["#0a0604", 5, 16]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} color="#FFD27A" />
      <pointLight position={[-4, 2, 3]} intensity={2.4} color="#D4AF37" />
      <pointLight position={[4, -1, 2]} intensity={1.8} color="#B76E5A" />
      <spotLight position={[0, 6, 4]} intensity={2} angle={0.6} penumbra={1} color="#F7E7CE" />

      <SilkWave />
      <GoldOrb />
      <Filigree />
      <Embers />
    </>
  );
}

export function RoyalScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
