import { useState } from 'react';
import './Form.css';
import { useHistory, NavLink } from 'react-router-dom';
const SignIn = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    errors: {
      name: '',
      password: '',
    },
  });

  const history = useHistory();

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

    if (!errors.name && !errors.password) {
      history.push('/categories');
    }

    setState({ ...state, errors });
  };

  const { errors } = state;

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="login-logo">
          <h1>Dr Workout</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              autoComplete="off"
            />

            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            {errors.password.length > 0 && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="submit">
            <button>Sign In</button>
          </div>
          <NavLink to="/signup">Sign Up</NavLink>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
