import React from "react";
import { useParams } from "react-router-dom";
import { getWorkouts } from "../utils/getData";
import "./styles/workouts.css";
import CricyleCounter from "../components/CircyleCounter";

function Workout() {
  const [workouts, setWorkouts] = React.useState(null);
  const [workoutIndex, setWorkoutIndex] = React.useState(0);
  const [currentWorkout, setCurrentworkout] = React.useState(null);
  const [workoutInterval, setWorkoutInterval] = React.useState(null);
  let { category } = useParams();

  React.useEffect(() => {
    getWorkouts(category).then((data) => {
      setWorkouts(() => {
        setCurrentworkout({ ...data[workoutIndex] });
        return data;
      });
    });
  }, []);

  const handlePrev = (event) => {
    setWorkoutIndex((prevIndex) => {
      let nextIndex = prevIndex - 1;
      nextIndex = nextIndex < 0 ? workouts.length - 1 : nextIndex;
      return nextIndex;
    });
    setCurrentworkout({ ...workouts[workoutIndex] });
    console.log(currentWorkout);
  };

  const handleNext = (event) => {
    setWorkoutIndex((prevIndex) => {
      return (prevIndex + 1) % workouts.length;
    });
    setCurrentworkout({ ...workouts[workoutIndex] });
    console.log(currentWorkout);
  };

  const handleStart = () => {
    if (!workoutInterval) {
      const currInterval = setInterval(() => {
        // change the current
        setCurrentworkout((prevWorkout) => {
          const workout = { ...prevWorkout };
          workout.time--;
          return workout;
        });
      }, 1000);
      setWorkoutInterval(currInterval);
    }
  };

  const handlePause = () => {
    clearInterval(workoutInterval);
    setWorkoutInterval(null);
  };

  if (!workouts) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="workout-container">
      <div className="workout-logo">
        <h1>Dr Workout</h1>
      </div>
      <div className="image-container">
        <img src={currentWorkout.gif_url} alt="workout image"></img>
      </div>
      <h3>{currentWorkout.tip}</h3>
      <div className="timer-rounds-container">
        <CricyleCounter title={"Time PR"} count={currentWorkout.time} />
        <CricyleCounter title={"Rounds"} count={currentWorkout.repeate} />
        <div className="controls-container">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
        </div>
      </div>
      <button onClick={handlePrev}> Previous </button>
      <button onClick={handleNext}> Next </button>
    </div>
  );
}

export default Workout;
