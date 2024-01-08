'use client'
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";

export default function landing() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setMouseCoordinates({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      <div
        className="pointerShadow"
        style={{
          left: `${mouseCoordinates.x}px`,
          top: `${mouseCoordinates.y}px`
        }}
      />
      <div className="justify-center w-full h-[800px] items-center">
        <Canvas className="">
          {/* <PerspectiveCamera/> */}
          <ambientLight />
          <pointLight position={[15, 15, 15]} />
          <Cube />
        </Canvas>
      </div>
    </>

  )
}


function Cube() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;

  })
  return (
    <mesh ref={meshRef}>

      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#969FEF"} />
    </mesh>
  );
}

