import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Saikiran Reddy Konereddy', // e.g: 'Name | Developer'
  lang: 'En', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Saikiran Reddy',
  subtitle: 'I am a Front End / Web Developer currently living in Jacksonville, FL.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphTwo: 'I have been developing websites, using a keen eye for interactive design to develop pixel-perfect code that translates static design concepts into real world web application in production environments using latest JavaScript Frameworks like React & Angular',
  paragraphThree: 'Well-organised person, problem solver, independent employee with high attention to detail and exemplary communication skills; able to explain possible solutions to non-technical team members.',
  paragraphOne: 'Personally connected with the web development industry and information technology for the past 6 years.',
  paragraphFour: 'Skills: HTML5, CSS3, SCSS, JavaScript, ReactJS, Redux, React-Router, Axios, Node.js, Immutable.js, Express.js, Moment.js, Foundation, Chart.js, Bloomreach, ES6, JSX, Jest, Webpack, ESLint, Jenkins, Git, GitLab, Rally.'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'FloridaBlue.jpg',
    title: 'IT Developer',
    info: 'Florida Blue, Jacksonville, FL.',
    info2: 'Projects: Digital Migration for Under-65 Members, Medicare Member Website, Truli For Health Care, Message Center.'
  },
  {
    id: nanoid(),
    img: 'Anthem.jpg',
    title: 'Front End Web Developer',
    info: 'Anthem, Inc., Atlanta, GA.',
    info2: 'Projects: Community of Practice Platform, NGG Platform,  Community of Excellence Platform, Live Chat integration into Member websites.'
  },
  {
    id: nanoid(),
    img: 'Epsilon.jpg',
    title: 'Front End Developer',
    info: 'Epsilon, Dallas, TX.',
    info2: 'Projects: Reusable Feature components which will be used for multiple clients (Eg: My Account feature as a component).'
  },
  {
    id: nanoid(),
    img: 'ValueLabs.jpg',
    title: 'Jr. Software Engineer',
    info: 'Value Labs, Hyderabad, TG.',
    info2: 'Worked on muliple projects.'
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: ' ',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/saireddy-257/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: ' ',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
