import { DefaultBadges } from '../components/badge/defaults';
import ButterflyCard from '../components/butterflyCard';
import {
  Breaches,
  IHESJR,
  Lineage,
  Maze,
  MRB,
  PlantCam,
  Portfolio,
  Risk,
  Saga,
  SFTT,
} from './images';
import { Links } from './main.js';

export const ACTIVE_PROJECTS = [];

const photoEditorDetails = {
  title: 'Photo Editor',
  description: {
    text: 'an application capable of importing images to, exporting '
      + 'images from, and modifying images in a user\'s photo library. '
      + 'written in Java and tested with JUnit.',
  },
  date: 'June 2021',
  badges: [DefaultBadges.JAVA],
};

export const COMPLETED_PROJECTS = [
  {
    title: 'Data Breach Policy Memo',
    description: {
      text: 'an analysis of policy options to mitigate the damages of '
        + 'personal data breaches, informed by Python data analysis.'
    },
    date: 'Feb-Apr 2023',
    image: Breaches,
    badges: [DefaultBadges.RESEARCH, DefaultBadges.PYTHON]
  },
  {
    title: 'Lineage Classification',
    description: {
      text: 'an investigation into the effectiveness of machine learning '
        + 'algorithms in classifying cell lineages and identifying genes '
        + 'essential to tumorigenesis to guide targeted cancer treatment '
        + 'development.',
    },
    date: 'Jan-Apr 2023',
    image: Lineage,
    badges: [DefaultBadges.RESEARCH, DefaultBadges.PYTHON],
  },
  {
    title: 'Infestation Risk Calculator',
    description: {
      text: 'a Shiny application to calculate and visualize the risk of '
        + 'invasive mussel populations across 2,470 hydrologic units within '
        + 'the Missouri River Basin.',
    },
    date: 'Jun-Dec 2022',
    image: MRB,
    badges: [DefaultBadges.R],
  },
  {
    title: 'Health Equity Research',
    description: {
      text: 'a qualitative analysis of focus group discussions to reveal '
        + 'and improve the current state and impact of government administrative '
        + 'practices on the well-being of the human services sector.',
    },
    date: 'Jan-Jun 2022',
    image: IHESJR,
    badges: [DefaultBadges.RESEARCH, DefaultBadges.PYTHON],
  },
  {
    title: 'Adopt A Tree Web App',
    description: {
      text: 'a web application to connect residents to their local tres and '
        + 'help @SpeakForTheTrees expand Boston\'s urban forest.',
      custom: <>
        a web application to connect residents to their local trees
        and help{' '}
        <a href={Links.SFTT} target={'_blank'} rel={'noreferrer'}>
          @SpeakForTheTrees
        </a>{' '}
        expand Boston's urban forest.
      </>,
    },
    date: 'Aug 2020-May 2022',
    link: Links.SFTT_SITE,
    image: SFTT,
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
    description: {
      text: 'a Shiny application to visualize the spatial and temporal '
        + 'variation in mosquito abundance to help managers combat the '
        + 'extinction of Hawaiian bird species caused by avian malaria '
        + 'transmission.',
    },
    date: 'Mar-May 2022',
    image: Risk,
    badges: [DefaultBadges.R],
  },
  {
    title: 'plantCam',
    description: {
      text: 'an informative website about the state of endangered plants '
        + 'in Hawaii, with optimized analysis and visualization of real-time '
        + 'data collected by multiple field sensors.',
    },
    date: 'Aug 2021-Mar 2022',
    link: Links.PLANT_CAM,
    image: PlantCam,
    badges: [DefaultBadges.R],
  },
  {
    title: 'Maze 2.0',
    description: {
      text: 'originally done in Java, a React + TypeScript front end and '
        + 'Nest backend that lets users generate biased and unbiased mazes '
        + 'of desired dimensions, play through them, and watch them be solved '
        + 'through breadth-first or depth-first search.',
    },
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
    description: {
      text: 'a site designed in Figma and created with React to keep '
        + 'track of my latest experiences.',
    },
    date: 'November 2021',
    image: Portfolio,
    badges: [DefaultBadges.REACT, DefaultBadges.JS],
  },
  {
    title: 'Digital Equity Research',
    description: {
      text: 'a literature review finding solutions to support older '
        + 'adults isolated by the COVID-19 pandemic and decrease the '
        + 'generational and socioeconomic gap in technology access and use.',
    },
    date: 'Mar 2021-Nov 2021',
    image: Links.DE_RESEARCH_PHOTO,
    link: Links.LBFE,
    badges: [DefaultBadges.RESEARCH],
  },
  {
    title: 'Story Player & Writer',
    description: {
      text: 'an application that allows users to play, create, and share '
        + 'interactive stories without any programming knowledge through '
        + 'the CL or a web interface.',
    },
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
    ...photoEditorDetails,
    customElement: <ButterflyCard
      title={photoEditorDetails.title}
      description={photoEditorDetails.description}
      date={photoEditorDetails.date}
      badges={photoEditorDetails.badges}
    />,
  },
];
