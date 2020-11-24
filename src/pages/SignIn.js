import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
const SignIn = () => {
  const [name, setName] = useState('');

  useEffect(() => {}, [name]);

  return (
    <div>
      <Button text="Sign up" />
      <Button text="Sign in" />
    </div>
  );
};

export default SignIn;
