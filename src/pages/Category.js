import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";

import axios from "axios";

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const fetchDataFromAPI = async (categoryName) => {
	categoryName = capitalize(categoryName);

	return await axios
		.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
		.then(({ data }) => data.meals)
		.catch((error) => {
			console.log(error);
		});
};

const Category = () => {
	let categoryName = useParams();
	categoryName = categoryName.category.toString();

	console.log(categoryName.category);

	const [meal, setMeal] = useState(null);

	useEffect(() => {
		fetchDataFromAPI(categoryName).then((data) =>
			setMeal(data || "No meals found.")
		);
	}, [categoryName]);

	return (
		<div className="category">
			<div className="category__items">
				{(meal &&
					meal.map((meal) => (
						<div className="category__item" key={meal.idMeal}>
							<figure>
								<img src={meal.strMealThumb} alt={meal.strMeal} />
								<figcaption>
									<span>{meal.strMeal}</span>
								</figcaption>
							</figure>
						</div>
					))) ||
					"Loading..."}
			</div>
		</div>
	);
};

export default Category;
