import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { box } from "@/data/box";

export function createSideGeometry(baseGeometry, size, folds, hasMiddleLayer) {
  const geometriesToMerge = [];
  geometriesToMerge.push(
    getLayerGeometry(
      (v) =>
        -0.5 * box.params.thickness + 0.01 * Math.sin(box.params.fluteFreq * v)
    )
  );
  geometriesToMerge.push(
    getLayerGeometry(
      (v) =>
        0.5 * box.params.thickness + 0.01 * Math.sin(box.params.fluteFreq * v)
    )
  );
  if (hasMiddleLayer) {
    geometriesToMerge.push(
      getLayerGeometry(
        (v) => 0.5 * box.params.thickness * Math.sin(box.params.fluteFreq * v)
      )
    );
  }

  function getLayerGeometry(offset) {
    const layerGeometry = baseGeometry.clone();
    const positionAttr = layerGeometry.attributes.position;
    for (let i = 0; i < positionAttr.count; i++) {
      const x = positionAttr.getX(i);
      const y = positionAttr.getY(i);
      let z = positionAttr.getZ(i) + offset(x);
      z = applyFolds(x, y, z);
      positionAttr.setXYZ(i, x, y, z);
    }
    return layerGeometry;
  }

  function applyFolds(x, y, z) {
    let modifier = (c, s) => 1 - Math.pow(c / (0.5 * s), 10);
    if ((x > 0 && folds[1]) || (x < 0 && folds[3])) {
      z *= modifier(x, size[0]);
    }
    if ((y > 0 && folds[0]) || (y < 0 && folds[2])) {
      z *= modifier(y, size[1]);
    }
    return z;
  }

  const mergedGeometry = new mergeGeometries(geometriesToMerge, false);
  mergedGeometry.computeVertexNormals();

  return mergedGeometry;
}
