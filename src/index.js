import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Homepage
import Home from "./Home";

// Pages
import Categories from "./pages/Categories";
import Category from "./pages/Category";

const rootElement = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="categories" element={<Categories />}></Route>
					<Route path="categories/:category" element={<Category />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	rootElement
);
