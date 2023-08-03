import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constant";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<div className="mt-20 mb-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>About me.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I'm a Frontend developer with a proven track record of delivering
				successful projects on time using Agile development methodologies. With
				over two years of experience as a full stack developer, I have a passion
				for creating engaging and user-friendly web applications using
				cutting-edge technologies. At Artalaxies LLC, I work with a team of
				talented developers to deliver a dashboard that provides real-time data
				visualization for art collectors and enthusiasts.
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, "about");
