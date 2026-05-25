import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars, Sparkles, Environment } from '@react-three/drei'
import * as THREE from 'three'

function CrystalCore() {
  const meshRef = useRef()
  const innerRef = useRef()
  const ringsRef = useRef([])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12
      meshRef.current.rotation.x = Math.sin(t * 0.07) * 0.15
      meshRef.current.rotation.z = Math.cos(t * 0.05) * 0.08
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.2
      innerRef.current.rotation.z = t * 0.1
    }
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.y = t * (0.1 + i * 0.05)
        ring.rotation.x = t * (0.08 - i * 0.03)
      }
    })
  })

  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#C9962A'),
    metalness: 0.9,
    roughness: 0.1,
    emissive: new THREE.Color('#8B6914'),
    emissiveIntensity: 0.3,
  }), [])

  const wireMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: new THREE.Color('#E8C96A'),
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  }), [])

  const ringPositions = [
    { rot: [Math.PI / 2, 0, 0], scale: 1.6 },
    { rot: [0, 0, Math.PI / 3], scale: 1.8 },
    { rot: [Math.PI / 4, Math.PI / 4, 0], scale: 2.0 },
  ]

  return (
    <group>
      {/* Outer wireframe icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#C9962A"
          metalness={0.95}
          roughness={0.05}
          emissive="#6B4A10"
          emissiveIntensity={0.4}
          wireframe={false}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Gold wireframe shell */}
      <mesh ref={meshRef} scale={1.01}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial
          color="#E8C96A"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner solid core */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.3}>
        <mesh ref={innerRef} scale={0.65}>
          <icosahedronGeometry args={[1.4, 0]} />
          <MeshDistortMaterial
            color="#C9962A"
            metalness={0.95}
            roughness={0.05}
            emissive="#8B6914"
            emissiveIntensity={0.6}
            distort={0.15}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Orbital rings */}
      {ringPositions.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          rotation={ring.rot}
        >
          <torusGeometry args={[ring.scale, 0.008, 8, 80]} />
          <meshStandardMaterial
            color="#D4AF61"
            metalness={0.9}
            roughness={0.1}
            emissive="#C9962A"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Glow sphere */}
      <mesh scale={1.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#C9962A"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Inner glow */}
      <mesh scale={1.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#E8C96A"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const count = 120
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.04
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D4AF61"
        size={0.04}
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#C9962A" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#1B3A5C" />
      <pointLight position={[0, 8, 0]} intensity={1.5} color="#E8C96A" />
      <spotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        color="#D4AF61"
        castShadow={false}
      />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 60 }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneLighting />
      <Stars
        radius={80}
        depth={60}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <Sparkles
        count={40}
        scale={8}
        size={1.5}
        speed={0.3}
        color="#C9962A"
        opacity={0.6}
      />
      <CrystalCore />
      <FloatingParticles />
    </Canvas>
  )
}
