import Button from '../components/Button';
import './Home.css';
const Home = () => {
  return (
    <>
      <div className="container">Dr Workout App</div>
      <div className="container">
        <Button text="Sign Up" href="/signup" />
        <Button text="Sign In" href="/signin" />
      </div>
    </>
  );
};

export default Home;
