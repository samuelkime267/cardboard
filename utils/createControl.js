import { box } from "@/data/box";
import { updatePanelsTransform } from "./updatePanelTransform";
import { CreateBoxElements } from "./createBoxElement";
import GUI from "lil-gui";
import { useEffect } from "react";
import { useControls, folder } from "leva";

export function CreateControls() {
  const gui = new GUI();
  gui
    .add(
      box.params,
      "width",
      box.params.widthLimits[0],
      box.params.widthLimits[1]
    )
    .step(1)
    .onChange(() => {
      CreateBoxElements();
      updatePanelsTransform();
    });
  gui
    .add(
      box.params,
      "length",
      box.params.lengthLimits[0],
      box.params.lengthLimits[1]
    )
    .step(1)
    .onChange(() => {
      CreateBoxElements();
      updatePanelsTransform();
    });
  gui
    .add(
      box.params,
      "depth",
      box.params.depthLimits[0],
      box.params.depthLimits[1]
    )
    .step(1)
    .onChange(() => {
      CreateBoxElements();
      updatePanelsTransform();
    });
  gui
    .add(
      box.params,
      "fluteFreq",
      box.params.fluteFreqLimits[0],
      box.params.fluteFreqLimits[1]
    )
    .step(1)
    .onChange(() => {
      CreateBoxElements();
    })
    .name("flute");
  gui
    .add(
      box.params,
      "thickness",
      box.params.thicknessLimits[0],
      box.params.thicknessLimits[1]
    )
    .step(0.05)
    .onChange(() => {
      CreateBoxElements();
    });
}
