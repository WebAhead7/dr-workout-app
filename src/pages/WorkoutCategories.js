import React from "react";
import { Redirect } from "react-router-dom";
import Category from "../components/Category";
import { getWorkoutCategories } from "../utils/getData";
import "./styles/categories.css";

function Categories(props) {
  const [categories, setCategories] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [logout, etLogout] = React.useState(null);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  React.useEffect(() => {
    getWorkoutCategories().then((data) => setCategories(data));
    return () => {
      console.log("Categories Unmount");
    };
  }, []);

  if (!categories) {
    return <h1>Loading...</h1>;
  }

  const render = () => {
    if (selectedCategory) {
      return <Redirect to={`workout/${selectedCategory}`} />;
    }
    return (
      <div className="categories-backgroud">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Category name={category} handleClicked={handleSelectCategory} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <div>{render()}</div>;
}

export default Categories;
