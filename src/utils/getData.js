import data from "../data/data.json";

export function getWorkoutCategories() {
  return Promise.resolve(
    Array.from(new Set(data.map((workout) => workout.category)))
  );
}
