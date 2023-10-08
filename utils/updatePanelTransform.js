import { box } from "@/data/box";

export function updatePanelsTransform() {
  // place width-sides aside of length-sides (not animated)
  box.els.frontHalf.width.side.position.x = 0.5 * box.params.length;
  box.els.backHalf.width.side.position.x = -0.5 * box.params.length;

  // rotate width-sides from 0 to 90 deg
  box.els.frontHalf.width.side.rotation.y = box.animated.openingAngle;
  box.els.backHalf.width.side.rotation.y = box.animated.openingAngle;

  // move length-sides to keep the box centered
  const cos = Math.cos(box.animated.openingAngle); // animates from 1 to 0
  box.els.frontHalf.length.side.position.x = -0.5 * cos * box.params.width;
  box.els.backHalf.length.side.position.x = 0.5 * cos * box.params.width;

  // move length-sides to define box inner space
  const sin = Math.sin(box.animated.openingAngle); // animates from 0 to 1
  box.els.frontHalf.length.side.position.z = 0.5 * sin * box.params.width;
  box.els.backHalf.length.side.position.z = -0.5 * sin * box.params.width;

  box.els.frontHalf.width.top.rotation.x =
    -box.animated.flapAngles.frontHalf.width.top;
  box.els.frontHalf.length.top.rotation.x =
    -box.animated.flapAngles.frontHalf.length.top;
  box.els.frontHalf.width.bottom.rotation.x =
    box.animated.flapAngles.frontHalf.width.bottom;
  box.els.frontHalf.length.bottom.rotation.x =
    box.animated.flapAngles.frontHalf.length.bottom;

  box.els.backHalf.width.top.rotation.x =
    box.animated.flapAngles.backHalf.width.top;
  box.els.backHalf.length.top.rotation.x =
    box.animated.flapAngles.backHalf.length.top;
  box.els.backHalf.width.bottom.rotation.x =
    -box.animated.flapAngles.backHalf.width.bottom;
  box.els.backHalf.length.bottom.rotation.x =
    -box.animated.flapAngles.backHalf.length.bottom;
}
