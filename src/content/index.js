import Default from './butterfly/default.PNG';
import Blur from './butterfly/butterflyBlur.PNG';
import Downscale from './butterfly/butterflyDownscale.png';
import Monochrome from './butterfly/butterflyMonochrome.PNG';
import Mosaic from './butterfly/butterflyMosaic.PNG';
import Sepia from './butterfly/butterflySepia.PNG';
import Sharpen from './butterfly/butterflySharpen.PNG';

// General
export const NAME = "Sofie Duntugan";
export const EMAIL = "duntugan.s@northeastern.edu";
export const Links = {
  EMAIL: "mailto:" + EMAIL,
  GITHUB: "https://github.com/SofieDunt",
  SFTT: "https://treeboston.org/",
  SFTT_SITE: "https://map.treeboston.org/",
  SAGA: "https://github.com/SofieDunt/saga",
  PLANT_CAM: "https://www.plantcam.live/",
  LBFE: "https://lbfeboston.org/",
  DE_RESEARCH_PHOTO: "https://lbfeboston.org/wp-content/uploads/2021/11/0001-1.jpg",
}
export const DATE_UPDATED = "December 14, 2021";

// Menu
export const SectionIds = {
  CURRENT_PROJECTS: 'current',
  COMPLETED_PROJECTS: 'completed',
  REQUEST: 'request',
};

export const SectionNames = {
  'current' : 'Current Projects',
  'completed' : 'Completed Projects',
  'request' : 'Request',
}

export const MenuSections = [SectionIds.CURRENT_PROJECTS, SectionIds.COMPLETED_PROJECTS];

// Banner
export const TITLES = [
  "Sofie",
  "a second-year student",
  "slightly addicted to coffee"
];
export const ABOUT_ME =
    "I study computer science, political science, and a bit of math at "
    + "Northeastern University to develop technical solutions to the pressing "
    + "issues we face today.";

// Butterfly Photos
export const BUTTERFLIES = [
  { name: 'Load Default', img: Default },
  { name: 'Blur', img: Blur },
  { name: 'Sharpen', img: Sharpen },
  { name: 'Downscale', img: Downscale },
  { name: 'Monochrome', img: Monochrome },
  { name: 'Sepia', img: Sepia },
  { name: 'Mosaic', img: Mosaic },
];
