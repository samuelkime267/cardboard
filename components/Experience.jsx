import React from "react";
import { Canvas } from "@react-three/fiber";
import Light from "./Light";
import { InitScene } from "@/utils/initializeScene";
import { OrbitControls } from "@react-three/drei";
import { CreateFoldingAnimation } from "@/utils/createFoldingAnimation";
import { CreateBoxElements } from "@/utils/createBoxElement";
// import { CreateControls } from "@/utils/createControl";

export default function Experience() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas
        camera={{ position: [40, 90, 110], fov: 45, near: 10, far: 1000 }}
      >
        <OrbitControls />
        <InitScene />
        <Light />
        <CreateBoxElements />
        <CreateFoldingAnimation />
        {/* <CreateControls /> */}
      </Canvas>
    </div>
  );
}
