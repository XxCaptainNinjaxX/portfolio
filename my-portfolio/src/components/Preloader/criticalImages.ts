import { skills } from "../Data/data.ts";

import backgroundImage from "../../assets/images/bg2.jpg";
import mainImage from "../../assets/images/main1.jpg";

const brandLogo = "/android-chrome-192x192.png";

/**
 * The images the page must have painted before the preloader lifts.
 * Kept as an explicit list rather than a glob so the unreferenced assets
 * sitting in src/assets are never pulled into the gate.
 */
export const criticalImages: string[] = Array.from(
  new Set([
    backgroundImage,
    mainImage,
    brandLogo,
    ...skills.map((skill) => skill.image),
  ]),
);
