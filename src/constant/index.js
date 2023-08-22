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
		title: "React.Js",
		icon: mobile,
	},
	{
		title: "JavaScript",
		icon: mobile,
	},
	{
		title: "Frontend Developer",
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
		title: "Frontend Developer",
		company_name: "Artalaxies",
		icon: Artalaxies,
		iconBg: "#E6DEDD",
		date: "January - Present",
		points: [
			"Successfully developed and delivered 15+ frontend features within tight deadlines using Agile methodologies.",
			"Contributed to a 30% increase in user engagement by rebuilding landing Webapp using React and Tailwind with full user experience.",
			"Collaborated with a team of developers to achieve a 20% improvement in website performance by optimizing frontend code",
			"Developed UI using RESTful APIs for seamless data retrieval and enhanced website functionality.",
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
		title: "Practicum by Yandex Externship",
		company_name: "Practicum",
		icon: practicum,
		iconBg: "#E6DEDD",
		date: "Jul 2021 - May 2022",
		points: [
			"Completed 740+ hours of coding in JavaScript, React, Node.js, HTML, CSS",
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Sales Representative",
		company_name: "Heblima",
		icon: heblima,
		iconBg: "#E6DEDD",
		date: "Jan 2016 - Feb 2018",
		points: [
			" Developed and maintained a strong sales pipeline",
			" Converted 20% of leads into paying customers.",
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
			"This is a project that uses the Web 3.0 tech stack to build decentralized applications for the next generation of internet experience.",
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
];

export { services, technologies, experiences, projects };
