import data from "../data/data.json";

export function getWorkoutCategories() {
  return Promise.resolve(
    Array.from(new Set(data.map((workout) => workout.category)))
  );
}
export function getWorkouts(category) {
  return Promise.resolve(
    data.filter((workout) => workout.category === category)
  );
}
