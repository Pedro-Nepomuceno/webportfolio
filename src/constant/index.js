import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  around,
  hometown,
  web_1,
  nodejs,
  mongodb,
  git,
  figma,
  sindanoi,
  threejs,
  heblima,
  practicum,
  sindano,
  Artalaxies,
  Art,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IT support",
    icon: mobile,
  },
  {
    title: "Cloud deployment",
    icon: mobile,
  },
  {
    title: "Node.js",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "IT Support Specialist",
    company_name: "Salgado & Peralta P.A",
    icon: Artalaxies,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Administer and maintain secure document management systems, ensuring proper access control and compliance with confidentiality policies.",
      "Manage user processes including account access requests, document permissions, and secure data handling",
      "Supported day-to-day technical needs of a 20+ user office environment including password resets, shared drive access, printer troubleshooting, and workstation configuration",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Sindano Health",
    icon: sindano,
    iconBg: "#E6DEDD",
    date: "November 2022 - January 2023",
    points: [
      "A collaboration with five software engineers in an agile environment and contributed to the following:",
      "Built a B2B landing page using ReactJS.",
      "Deployed a frontend application to GitHub pages.",
      "Tech: ReactJs | Styled Components | Framer Motion | LinkedIn API | Serverless Framework | Nodemailer.",
    ],
  },
  {
    title: "Sales Assistant",
    company_name: "Heblima Ltda",
    icon: practicum,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - May 2019",
    points: [
      "Served as primary point of contact for client inquiries regarding pricing, order status, and product availability.",
      "Managed order lifecycle from RFQ to delivery and invoicing.",
      "Assisted in preparing documentation for industrial components including valves and tubing.",
      "Expanded existing accounts by cross-selling high-pressure valves and specialty tubing solutions.",
    ],
  },
];

const projects = [
  {
    name: "Sindano Health",
    description:
      "A responsive landing page for the Sinadano company built using React and Storybook. This real-world project was a voluntary collaboration between four other developers and myself under the Practicum USA externship program.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: sindanoi,
    source_code_link: "https://github.com/Pedro-Nepomuceno/Sindano",
  },
  {
    name: "Around-React",
    description:
      "A full-stack web app that allows users to create an account, log in, add, delete, like, and unlike photos and update their avatar. Designed a RESTful API to provide CRUD functionality and store data using MongoDB",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: around,
    source_code_link:
      "https://github.com/Pedro-Nepomuceno/react-around-api-full",
  },
  {
    name: "Artalaxies",
    description:
      "This project was developed for Artalaxies. A company that use the Web 3.0 tech stack to build decentralized applications for the next generation of internet experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: Art,
    source_code_link: "https://github.com/Artalaxies",
  },
  {
    name: "Showcase",
    description:
      "This is a project that showcases the hometowns of some of Practicum's employees. I've built it so all the elements are displayed correctly on popular screen sizes.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
    ],
    image: hometown,
    source_code_link: "https://github.com/Pedro-Nepomuceno/web_project_3",
  },
  {
    name: "Learning how to learn",
    description:
      "This project was built during practicum's bootcamp using HTML and CSS,The project shows how the process of learning works and what techniques are available for anyone who is interested in mastering a new skill.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
    ],
    image: web_1,
    source_code_link: "https://pedro-nepomuceno.github.io/web_project_1/",
  },
];

export { services, technologies, experiences, projects };
