import React from "react";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../utils/getData";
import "./styles/workouts.css";

function Workout() {
  const [workouts, setWorkouts] = React.useState(null);
  const [workoutIndex, setWorkoutIndex] = React.useState(0);
  let { category } = useParams();

  React.useEffect(() => {
    console.log("Workout mount");
    getWorkouts(category).then((data) => setWorkouts(data));
    return () => {
      console.log("WorkOut Unmount");
    };
  }, []);

  const handlePrev = (event) => {
    setWorkoutIndex((prevIndex) => {
      let nextIndex = prevIndex - 1;
      nextIndex = nextIndex < 0 ? workouts.length - 1 : nextIndex;
      return nextIndex;
    });
  };

  const handleNext = (event) => {
    setWorkoutIndex((prevIndex) => {
      return (prevIndex + 1) % workouts.length;
    });
  };

  if (!workouts) {
    return <h1>Loading...</h1>;
  }
  const currentWorkout = workouts[workoutIndex];
  return (
    <div className="workout-container">
      <div className="workout-logo">
        <h1>Dr Workout</h1>
      </div>
      <div className="image-container">
        <img src={currentWorkout.gif_url} alt="workout image"></img>
      </div>
      <h3>{currentWorkout.tip}</h3>
      <h3> here timer willbe added</h3>
      <button onClick={handlePrev}> Previous </button>
      <button onClick={handleNext}> Next </button>
    </div>
  );
}

export default Workout;
