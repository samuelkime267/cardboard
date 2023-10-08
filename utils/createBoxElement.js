import { box } from "@/data/box";
import { createSideGeometry } from "./createSideGeometry";
import * as THREE from "three";
import { updatePanelsTransform } from "./updatePanelTransform";

export function CreateBoxElements() {
  for (let halfIdx = 0; halfIdx < 2; halfIdx++) {
    for (let sideIdx = 0; sideIdx < 2; sideIdx++) {
      const half = halfIdx ? "frontHalf" : "backHalf";
      const side = sideIdx ? "width" : "length";

      const sideWidth = side === "width" ? box.params.width : box.params.length;
      const flapWidth = sideWidth - 2 * box.params.flapGap;
      const flapHeight = 0.5 * box.params.width - 0.75 * box.params.flapGap;

      const sidePlaneGeometry = new THREE.PlaneGeometry(
        sideWidth,
        box.params.depth,
        Math.floor(5 * sideWidth),
        Math.floor(0.2 * box.params.depth)
      );
      const flapPlaneGeometry = new THREE.PlaneGeometry(
        flapWidth,
        flapHeight,
        Math.floor(5 * flapWidth),
        Math.floor(0.2 * flapHeight)
      );

      const sideGeometry = createSideGeometry(
        sidePlaneGeometry,
        [sideWidth, box.params.depth],
        [true, true, true, true],
        false
      );
      const topGeometry = createSideGeometry(
        flapPlaneGeometry,
        [flapWidth, flapHeight],
        [false, false, true, false],
        true
      );
      const bottomGeometry = createSideGeometry(
        flapPlaneGeometry,
        [flapWidth, flapHeight],
        [true, false, false, false],
        true
      );

      topGeometry.translate(0, 0.5 * flapHeight, 0);
      bottomGeometry.translate(0, -0.5 * flapHeight, 0);

      box.els[half][side].top.geometry = topGeometry;
      box.els[half][side].side.geometry = sideGeometry;
      box.els[half][side].bottom.geometry = bottomGeometry;

      box.els[half][side].top.position.y = 0.5 * box.params.depth;
      box.els[half][side].bottom.position.y = -0.5 * box.params.depth;
    }
  }

  updatePanelsTransform();
}
