import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constant";
import { logonoback, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg primary`}>
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<img
						src={logonoback}
						alt="logo"
						className="w-20 h-20 object-contain"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Pedro Nepomuceno{" "}
						<span className="sm:block hidden"> | Software Engineer</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((Link) => (
						<li
							key={Link.id}
							className={`${
								active === Link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}>
							<a href={`#${Link.id}`}>{Link.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : flex
						} p-6 black-gradient `}></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
