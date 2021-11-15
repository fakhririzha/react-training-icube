// import logo from './logo.svg';
import React from "react";
import { Outlet } from "react-router-dom";

import "./Home.scss";

// UI Components
import Nav from "./components/UI/Nav";

const Home = () => {
	return (
		<div className="home">
			<Nav />
			<main className="home__mainContent">
				<h1>Food-O-Licious!</h1>
			</main>
			<Outlet />
		</div>
	);
};

export default Home;
