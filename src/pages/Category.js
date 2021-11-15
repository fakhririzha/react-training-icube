import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

	console.log(meal);

	return (
		<div className="category">
			{/* <pre>{JSON.stringify(meal, null, 2)}</pre> */}
			<div className="category_items">
				{(meal &&
					meal.map((meal) => (
						<div className="category__item" key={meal.idMeal}>
							<h1>{meal.strMeal}</h1>
							<img src={meal.strMealThumb} alt={meal.strMeal} />
						</div>
					))) ||
					"Loading..."}
			</div>
		</div>
	);
};

export default Category;
