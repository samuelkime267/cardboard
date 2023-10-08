import React from "react";

export default function Light() {
  return (
    <>
      <ambientLight color="#ffffff" intensity={0.5} />
      <pointLight color="#ffffff" intensity={0.5} position={[-30, 300, 0]} />
      <pointLight color="#ffffff" intensity={0.7} position={[50, 0, 150]} />
    </>
  );
}
