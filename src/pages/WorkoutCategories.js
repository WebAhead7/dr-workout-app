import React from "react";
import { useHistory } from "react-router-dom";
import Category from "../components/Category";
import { getWorkoutCategories } from "../utils/getData";
import "./styles/categories.css";

function Categories(props) {
  const [categories, setCategories] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [logout, etLogout] = React.useState(null);

  const history = useHistory();

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

  if (selectedCategory) {
    {
      history.push(`workout/${selectedCategory}`);
    }
  }

  return (
    <div className="categories-backgroud">
      <ul>
        <li>
          <div className="logo">
            <h1>Dr Workout</h1>
          </div>
        </li>
        {categories.map((category) => (
          <li key={category.name}>
            <Category
              name={category.name}
              backgroundurl={category.url}
              handleClicked={handleSelectCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  // <div>{render()}</div>;
}

export default Categories;
