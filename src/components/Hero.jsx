import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = ({ text }) => {
	const paragraph = text.split("");

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
			className="flex overflow-hidden items-center  max-w-350 h-screen mx-auto">
			{paragraph.map((word, index) => (
				<motion.span
					variants={child}
					key={index}
					className="text-white mr-2 text-3xl">
					{word}
				</motion.span>
			))}
		</motion.div>
	);
};

export default Hero;
