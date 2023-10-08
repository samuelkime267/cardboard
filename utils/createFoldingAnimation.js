import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { box } from "@/data/box";
import { updatePanelsTransform } from "./updatePanelTransform";

export function CreateFoldingAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page",
        start: "0% 0%",
        end: "100% 100%",
        scrub: true,
      },
      onUpdate: () => {
        updatePanelsTransform();
      },
    })
    .to(box.animated, {
      duration: 1,
      openingAngle: 0.5 * Math.PI,
      ease: "power1.inOut",
    })
    .to(
      [
        box.animated.flapAngles.backHalf.width,
        box.animated.flapAngles.frontHalf.width,
      ],
      {
        duration: 0.6,
        bottom: 0.6 * Math.PI,
        ease: "back.in(3)",
      },
      0.9
    )
    .to(
      box.animated.flapAngles.backHalf.length,
      {
        duration: 0.7,
        bottom: 0.5 * Math.PI,
        ease: "back.in(2)",
      },
      1.1
    )
    .to(
      box.animated.flapAngles.frontHalf.length,
      {
        duration: 0.8,
        bottom: 0.49 * Math.PI,
        ease: "back.in(3)",
      },
      1.4
    )
    .to(
      [
        box.animated.flapAngles.backHalf.width,
        box.animated.flapAngles.frontHalf.width,
      ],
      {
        duration: 0.6,
        top: 0.6 * Math.PI,
        ease: "back.in(3)",
      },
      1.4
    )
    .to(
      box.animated.flapAngles.backHalf.length,
      {
        duration: 0.7,
        top: 0.5 * Math.PI,
        ease: "back.in(3)",
      },
      1.7
    )
    .to(
      box.animated.flapAngles.frontHalf.length,
      {
        duration: 0.9,
        top: 0.49 * Math.PI,
        ease: "back.in(4)",
      },
      1.8
    );
}
