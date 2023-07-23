import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = ({ text }) => {
	const word = text.split("");

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", damping: 12, stiffness: 100 },
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: { type: "spring", damping: 12, stiffness: 100 },
		},
	};
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="flex overflow-hidden items-center container  h-screen mx-auto">
			{words.map((word, index) => {
				{
					<motion.h1 variants={child} key={index} className="block text-3xl">
						{word}
					</motion.h1>;
				}
			})}
		</motion.div>
	);
};

export default Hero;
