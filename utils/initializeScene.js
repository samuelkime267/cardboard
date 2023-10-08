import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { box } from "@/data/box";
import { setGeometryHierarchy } from "./setGeometryHierarchy";

export function InitScene() {
  const { scene } = useThree();

  scene.add(box.els.group);

  setGeometryHierarchy();

  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x9c8d7b),
    side: THREE.DoubleSide,
  });
  box.els.group.traverse((c) => {
    if (c.isMesh) c.material = material;
  });
}
