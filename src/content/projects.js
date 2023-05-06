import IHESJR from './ihesjr.png';
import { DefaultBadges } from '../components/badge/defaults';
import SFTTSite from './SFTTSite.png';
import Risk from './risk.png';
import PlantCam from './plantcam.png';
import Maze from './maze.png';
import Logo from './logo.png';
import Saga from './saga.png';
import { Links } from './index';
import ButterflyCard from '../components/butterflyCard';

export const ACTIVE_PROJECTS = [];

export const COMPLETED_PROJECTS = [
  {
    title: 'Health Equity Research',
    description: 'a qualitative analysis of focus group discussions to reveal '
      + 'and improve the current state and impact of government administrative '
      + 'practices on the well-being of the human services sector.',
    date: 'Jan-Jun 2022',
    image: IHESJR,
    badges: [DefaultBadges.RESEARCH, DefaultBadges.PYTHON],
  },
  {
    title: 'Adopt A Tree Web App',
    description:
      <>
        a web application to connect residents to their local trees
        and help{' '}
        <a href={Links.SFTT} target={'_blank'} rel={'noreferrer'}>
          @SpeakForTheTrees
        </a>{' '}
        expand Boston's urban forest.
      </>,
    date: 'Aug 2020-May 2022',
    link: Links.SFTT_SITE,
    image: SFTTSite,
    badges:
      [
        DefaultBadges.REACT,
        DefaultBadges.TS,
        DefaultBadges.JAVA,
        DefaultBadges.VERTX,
      ],
  },
  {
    title: 'Vector Risk Visualizer',
    description: 'a Shiny application to visualize the spatial and temporal '
      + 'variation in mosquito abundance to help managers combat the '
      + 'extinction of Hawaiian bird species caused by avian malaria '
      + 'transmission.',
    date: 'Mar-May 2022',
    image: Risk,
    badges: [DefaultBadges.R],
  },
  {
    title: 'plantCam',
    description: 'an informative website about the state of endangered plants '
      + 'in Hawaii, with optimized analysis and visualization of real-time '
      + 'data collected by multiple field sensors.',
    date: 'Aug 2021-Mar 2022',
    link: Links.PLANT_CAM,
    image: PlantCam,
    badges: [DefaultBadges.R],
  },
  {
    title: 'Maze 2.0',
    description: 'originally done in Java, a React + TypeScript front end and '
      + 'Nest backend that lets users generate biased and unbiased mazes '
      + 'of desired dimensions, play through them, and watch them be solved '
      + 'through breadth-first or depth-first search.',
    date: 'January 2022',
    image: Maze,
    badges: [
      DefaultBadges.REACT,
      DefaultBadges.NODE,
      DefaultBadges.TS,
    ],
  },
  {
    title: 'this portfolio',
    description: 'a site designed in Figma and created with React to keep '
      + 'track of my latest experiences.',
    date: 'November 2021',
    image: Logo,
    badges: [DefaultBadges.REACT, DefaultBadges.JS],
  },
  {
    title: 'Digital Equity Research',
    description: 'a literature review finding solutions to support older '
      + 'adults isolated by the COVID-19 pandemic and decrease the '
      + 'generational and socioeconomic gap in technology access and use.',
    date: 'Mar 2021-Nov 2021',
    image: Links.DE_RESEARCH_PHOTO,
    link: Links.LBFE,
    badges: [DefaultBadges.RESEARCH],
  },
  {
    title: 'Story Player & Writer',
    description: 'an application that allows users to play, create, and share '
      + 'interactive stories without any programming knowledge through '
      + 'the CL or a web interface.',
    date: 'July 2021',
    link: Links.SAGA,
    image: Saga,
    badges:
      [
        DefaultBadges.JAVA,
        DefaultBadges.SPRING,
        DefaultBadges.REACT,
        DefaultBadges.TS,
      ],
  },
  {
    customElement: <ButterflyCard />,
  },
];
