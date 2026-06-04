import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useScroll, useTransform, motion } from "framer-motion";

function Ribbon({ progress }: { progress: { get: () => number } }) {
  const ref = useRef<THREE.Mesh>(null);
  const geom = useMemo(() => new THREE.PlaneGeometry(6, 2.6, 96, 36), []);
  const base = useMemo(() => new Float32Array(geom.attributes.position.array as Float32Array), [geom]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const p = progress.get();
    const arr = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      arr[i + 2] =
        Math.sin(x * 1.2 + t * 0.9 + p * 6) * (0.25 + p * 0.4) +
        Math.cos(y * 1.5 + t * 0.6) * 0.15;
    }
    geom.attributes.position.needsUpdate = true;
    geom.computeVertexNormals();
    if (ref.current) {
      ref.current.rotation.z = -0.35 + p * 0.8;
      ref.current.rotation.y = Math.sin(t * 0.3) * 0.2 + p * 0.4;
      ref.current.position.x = -1.5 + p * 2.5;
    }
  });

  return (
    <mesh ref={ref} geometry={geom}>
      <meshPhysicalMaterial
        color="#D4AF37"
        side={THREE.DoubleSide}
        roughness={0.3}
        metalness={0.7}
        sheen={1}
        sheenColor={new THREE.Color("#F7E7CE")}
        clearcoat={0.8}
        emissive={new THREE.Color("#3a2a10")}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export function ScrollSilk() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacityTitle = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-onyx">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 5, 4]} intensity={2} color="#F7E7CE" />
            <pointLight position={[-3, 2, 3]} intensity={1.6} color="#D4AF37" />
            <Ribbon progress={scrollYProgress} />
          </Suspense>
        </Canvas>

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.12_0.005_60/_0.9)_85%)]" />

        <motion.div
          style={{ opacity: opacityTitle, y: yTitle }}
          className="absolute inset-0 flex items-center"
        >
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.5em] text-primary mb-6">— Heritage in Motion</p>
            <h2 className="font-display text-5xl md:text-8xl text-ivory leading-[0.95] max-w-4xl">
              Every drape is a <span className="italic font-serif text-gradient-gold">love letter</span> from the loom.
            </h2>
            <p className="mt-8 max-w-md text-foreground/70 font-light">
              Four decades of master weavers, traced into every centimetre of silk.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}