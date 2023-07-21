import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="z-5 min-h-screen-80 text-center flex flex-col justify-start items-center py-4 md:py-0 font-Grandslang sans-serif relative overflow-hidden">
				<div className="min-h-screen-60 flex flex-col justify-center items-center mt-2.5vw mb-2.5vw relative">
					<div className="max-w-40vw relative overflow-hidden">
						<p className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d show-on-load-1st md:z-2 md:letter-spacing-1.3 md:text-uppercase md:font-Degular-display md:text-3.7vw md:relative">
							Frontend Developer
						</p>
						<div className="overflow-hidden md:margin-bottom-0 lg:font-size-12vw mb-neg-2.5vw font-Grandslang md:mb-neg-6.5vw flex flex-row justify-center items-stretch mb-neg-5.5vw font-Grandslang md:font-Grandslang">
							<div className="heading-hero md:justify-center md:mt-1px md:pl-7px md:pr-0 lg:pl-0 lg:pr-0 md:text-12vw xl:text-10vw md:pb-4px lg:pb-0 md:font-Migra xl:font-Grandslang md:font-light xl:font-normal md:line-h-0 md:z-10 lg:leading-0 md:flex">
								<div className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d show-on-load-3rd md:text-15vw lg:text-13vw xl:text-12vw min-w-100 text-e9dfce text-normal md:letter-spacing-neg-0.5 md:line-h-1.1 font-Grandslang md:font-light lg:font-normal text-11vw md:mb-0">
									CREATING
								</div>
							</div>
						</div>
						<div className="overflow-hidden md:margin-bottom-0 lg:font-size-12vw mb-neg-2.5vw font-Grandslang md:mb-neg-6.5vw flex flex-row justify-center items-stretch mb-neg-5.5vw font-Grandslang md:font-Grandslang">
							<div className="heading-hero md:justify-center md:mt-1px md:pl-7px md:pr-0 lg:pl-0 lg:pr-0 md:text-12vw xl:text-10vw md:pb-4px lg:pb-0 md:font-Migra xl:font-Grandslang md:font-light xl:font-normal md:line-h-0 md:z-10 lg:leading-0 md:flex">
								<div className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d show-on-load-3rd md:text-15vw lg:text-13vw xl:text-12vw min-w-100 text-e9dfce text-normal md:letter-spacing-neg-0.5 md:line-h-1.1 font-Grandslang md:font-light lg:font-normal text-11vw md:mb-0">
									SEAMLESS
								</div>
							</div>
						</div>
						<div className="overflow-hidden md:margin-bottom-0 lg:font-size-12vw mb-neg-2.5vw font-Grandslang md:mb-neg-6.5vw flex flex-row justify-center items-stretch mb-neg-5.5vw font-Grandslang md:font-Grandslang">
							<div className="heading-hero md:justify-center md:mt-1px md:pl-7px md:pr-0 lg:pl-0 lg:pr-0 md:text-12vw xl:text-10vw md:pb-4px lg:pb-0 md:font-Migra xl:font-Grandslang md:font-light xl:font-normal md:line-h-0 md:z-10 lg:leading-0 md:flex">
								<div className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d show-on-load-3rd md:text-15vw lg:text-13vw xl:text-12vw min-w-100 text-e9dfce text-normal md:letter-spacing-neg-0.5 md:line-h-1.1 font-Grandslang md:font-light lg:font-normal text-11vw md:mb-0">
									WEB EXPERIENCES
								</div>
							</div>
						</div>
						<div className="overflow-hidden md:margin-bottom-0 lg:font-size-12vw mb-neg-2.5vw font-Grandslang md:mb-neg-6.5vw flex flex-row justify-center items-stretch mb-neg-5.5vw font-Grandslang md:font-Grandslang">
							<div className="heading-hero md:justify-center md:mt-1px md:pl-7px md:pr-0 lg:pl-0 lg:pr-0 md:text-12vw xl:text-10vw md:pb-4px lg:pb-0 md:font-Migra xl:font-Grandslang md:font-light xl:font-normal md:line-h-0 md:z-10 lg:leading-0 md:flex">
								<div className="transform translate-x-0 translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d show-on-load-3rd md:text-15vw lg:text-13vw xl:text-12vw min-w-100 text-e9dfce text-normal md:letter-spacing-neg-0.5 md:line-h-1.1 font-Grandslang md:font-light lg:font-normal text-11vw md:mb-0">
									For your business
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
