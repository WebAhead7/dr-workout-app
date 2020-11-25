import data from "../data/data.json";
import categories from "../data/categories.json";
export function getWorkoutCategories() {
  return Promise.resolve(categories);
}
export function getWorkouts(category) {
  return Promise.resolve(
    data.filter((workout) => workout.category === category)
  );
}
