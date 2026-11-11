import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Sphere } from "@react-three/drei";

function RotatingGroup() {
  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
        <Icosahedron args={[1.4, 1]} position={[1.4, 0.4, 0]}>
          <MeshDistortMaterial
            color="#3270ff"
            distort={0.35}
            speed={2}
            roughness={0.15}
            metalness={0.6}
          />
        </Icosahedron>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.8}>
        <Torus args={[0.9, 0.28, 32, 100]} position={[-1.8, -0.6, -1]} rotation={[0.6, 0.4, 0]}>
          <MeshDistortMaterial color="#5a97ff" distort={0.2} speed={1.5} roughness={0.25} metalness={0.5} />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.2}>
        <Sphere args={[0.55, 32, 32]} position={[-0.6, 1.4, -0.5]}>
          <MeshDistortMaterial color="#8ebcff" distort={0.5} speed={3} roughness={0.1} metalness={0.4} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#8ebcff" />
      <pointLight position={[-5, -3, -2]} intensity={0.8} color="#3270ff" />
      <Suspense fallback={null}>
        <RotatingGroup />
      </Suspense>
    </Canvas>
  );
}
