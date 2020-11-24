import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './SignIn.css';
const SignIn = () => {
  const [name, setName] = useState('');

  useEffect(() => {}, [name]);

  return (
    <>
      <div className="container">Dr Workout App</div>
      <div className="container">
        <Button text="Sign Up" />
        <Button text="Sign In" />
      </div>
    </>
  );
};

export default SignIn;
