import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Navbar,
	Tech,
	StarsCanvas,
	Works,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<Navbar />
				<div className="flex justify-center items-center bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<About />
				</div>

				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
