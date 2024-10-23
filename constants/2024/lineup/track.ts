import { trackColor } from "@/constants/2024/css/css";

export const color = (track?: "A" | "B") => {
  switch (track) {
    case "A":
      return trackColor.a.primary;
    case "B":
      return trackColor.b.primary;
    default:
      return "white";
  }
};

export const borderColor = (track?: "A" | "B") => {
  switch (track) {
    case "A":
      return `${trackColor.a.primary} ${trackColor.a.secondary} ${trackColor.a.secondary} ${trackColor.a.primary}`;
    case "B":
      return `${trackColor.b.primary} ${trackColor.b.secondary} ${trackColor.b.secondary} ${trackColor.b.primary}`;
    default:
      return "white";
  }
};

export function borderWidth(track?: "A" | "B") {
  if (track) {
    return 2;
  }
  return 1;
}
