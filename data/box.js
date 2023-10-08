import * as THREE from "three";

export const box = {
  params: {
    width: 27,
    widthLimits: [15, 70],
    length: 80,
    lengthLimits: [70, 120],
    depth: 45,
    depthLimits: [15, 70],
    thickness: 0.6,
    thicknessLimits: [0.1, 1],
    fluteFreq: 5,
    fluteFreqLimits: [3, 7],
    flapGap: 1,
    copyrightSize: [27, 10],
  },
  els: {
    group: new THREE.Group(),
    backHalf: {
      width: {
        top: new THREE.Mesh(),
        side: new THREE.Mesh(),
        bottom: new THREE.Mesh(),
      },
      length: {
        top: new THREE.Mesh(),
        side: new THREE.Mesh(),
        bottom: new THREE.Mesh(),
      },
    },
    frontHalf: {
      width: {
        top: new THREE.Mesh(),
        side: new THREE.Mesh(),
        bottom: new THREE.Mesh(),
      },
      length: {
        top: new THREE.Mesh(),
        side: new THREE.Mesh(),
        bottom: new THREE.Mesh(),
      },
    },
  },
  animated: {
    openingAngle: 0.02 * Math.PI,
    flapAngles: {
      backHalf: {
        width: {
          top: 0,
          bottom: 0,
        },
        length: {
          top: 0,
          bottom: 0,
        },
      },
      frontHalf: {
        width: {
          top: 0,
          bottom: 0,
        },
        length: {
          top: 0,
          bottom: 0,
        },
      },
    },
  },
};
