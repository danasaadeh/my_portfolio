import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { Suspense } from "react";

const Laptop = () => {
  return (
    <group>
      {/* Base */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.95, -0.95]} rotation={[-Math.PI / 12, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Screen glow */}
      <mesh position={[0, 0.95, -0.94]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Keyboard area */}
      <mesh position={[0, 0.02, 0.3]}>
        <boxGeometry args={[2.6, 0.02, 1.4]} />
        <meshStandardMaterial color="#6b21a8" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Code lines on screen */}
      {[0.4, 0.2, 0, -0.2, -0.4].map((y, i) => (
        <mesh key={i} position={[-0.8, 0.95 + y, -0.93]}>
          <boxGeometry args={[1.8, 0.05, 0.01]} />
          <meshStandardMaterial 
            color="#c084fc" 
            emissive="#c084fc" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

export const Scene3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />
        <spotLight position={[0, 10, 0]} angle={0.3} intensity={1} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Laptop />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
