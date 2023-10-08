import { box } from "@/data/box";

export function setGeometryHierarchy() {
  box.els.group.add(
    box.els.frontHalf.width.side,
    box.els.frontHalf.length.side,
    box.els.backHalf.width.side,
    box.els.backHalf.length.side
  );
  box.els.frontHalf.width.side.add(
    box.els.frontHalf.width.top,
    box.els.frontHalf.width.bottom
  );
  box.els.frontHalf.length.side.add(
    box.els.frontHalf.length.top,
    box.els.frontHalf.length.bottom
  );
  box.els.backHalf.width.side.add(
    box.els.backHalf.width.top,
    box.els.backHalf.width.bottom
  );
  box.els.backHalf.length.side.add(
    box.els.backHalf.length.top,
    box.els.backHalf.length.bottom
  );
}
