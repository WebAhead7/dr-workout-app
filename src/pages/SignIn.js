import { useState } from 'react';

const SignIn = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    errors: {
      name: '',
      password: '',
    },
  });
  const isUserExist = (name) => window.localStorage.getItem(name);
  const getUserPassword = (name) => window.localStorage.getItem(name);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...state.errors };
    const { name, password } = state;
    errors.name = !isUserExist(name) ? 'User doas not exist' : '';
    errors.password =
      getUserPassword(name) !== password ? 'Password is wrong' : '';
    setState({ ...state, errors });
  };

  const { errors } = state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <hr />
        {errors.name.length > 0 && <span className="error">{errors.name}</span>}
        <hr />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <hr />
        {errors.password.length > 0 && (
          <span className="error">{errors.password}</span>
        )}
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignIn;
