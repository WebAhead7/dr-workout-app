import React from "react";
import Category from "../components/Category";
import { getWorkoutCategories } from "../utils/getData";
// import data from "../data/data.json";
function Categories() {
  const [categories, setCategories] = React.useState(null);
  React.useEffect(() => {
    getWorkoutCategories().then((data) => setCategories(data));
  });
  if (!categories) {
    return <h1>Loadind...</h1>;
  }
  return (
    <div>
      {categories.map((category) => (
        <Category name={category} />
      ))}
    </div>
  );
}

export default Categories;
