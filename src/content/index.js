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
  EMAIL: 'mailto:' + EMAIL,
  GITHUB: 'https://github.com/SofieDunt',
  ICONS: 'https://icons8.com/',
  SFTT: 'https://treeboston.org/',
  SFTT_SITE: 'https://map.treeboston.org/',
  SAGA: 'https://github.com/SofieDunt/saga',
  PLANT_CAM: 'https://www.plantcam.live/',
  LBFE: 'https://lbfeboston.org/',
  DE_RESEARCH_PHOTO: 'https://lbfeboston.org/wp-content/uploads/2021/11/0001-1.jpg',
}
export const DATE_UPDATED = "December 14, 2021";

// Icons
export const Icons = {
  EMAIL: 'https://img.icons8.com/material-rounded/96/ffffff/mail.png',
  GITHUB: 'https://img.icons8.com/ios-glyphs/480/ffffff/github.png',
  MENU: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAL0lEQVRIiWNgGAUjB/z////wf+qBwzBzmWjlXhqZOwooAaOpaBRQDkZT0SgYvAAAlsLwrAZxxMIAAAAASUVORK5CYII=',
  CLOSE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABaklEQVRYhe2WPU7DQBCFvzVsCpQaIg4AhkV01ChwACpDUnAXSo5BGSlXIPx0SIjSUsIBUA4QUeDESxEiQeTdeDYCUviV9nret2PN00ClSistk9R/u0bkelHbb11pG71s7La2g80P2lvaRk+1vfNrGYBJ6hZ7Aexka7aHSRpic5M0dJ4/AMYqdebqRDFA2h1l67VjIAVibaNHUSemN78FYhQDPVGnpN1R0VHlLXR4uanHH3eAAV71RDXfB523heZ53gMMioEeqxPfN34AKYTQvBxAWYgA8/IAiyACzWUALgitJqHmcgCYjpeN7oEY6H89jYF+pvImaXcoKScHgPlOEHLzmZxJ6FU+/gluAy/CCvwCWQcKEm6pxETSAd+ohSSmCKDMnAdCLAaQhEwAhB8gJOGEEG6AJeJVAlEMYJK6ttEzS4zX/LhmKj8q2gmcC4lV6ubbMiEzn9YYzkbUYjuuhcSvP1hKK1X6d30CfbEexVAMZmQAAAAASUVORK5CYII',
}

// Menu
export const SectionIds = {
  CURRENT_PROJECTS: 'current',
  COMPLETED_PROJECTS: 'completed',
  FOOTNOTES: 'footnotes',
};

export const SectionNames = {
  'current' : 'Current Projects',
  'completed' : 'Completed Projects',
  'footnotes' : 'Footnotes',
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
