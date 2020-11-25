import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Form.css";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
    errors: {
      name: "",
      password: "",
    },
  });

  const history = useHistory();
  const [authenticationStatus, SetAuthentication] = useState(false);

  const isUserExist = (name) => window.localStorage.getItem(name);
  const getUserPassword = (name) => window.localStorage.getItem(name);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...state.errors };
    console.log(errors);
    const { name, password } = state;
    errors.name = !isUserExist(name) ? "User doas not exist" : "";
    errors.password =
      getUserPassword(name) !== password ? "Password is wrong" : "";
    SetAuthentication(errors.name.length === 0 && errors.password.length === 0);
    setState({ ...state, errors });
  };

  const { errors } = state;

  const render = () => {
    if (authenticationStatus) {
      return <Redirect to="/categories" />;
    }
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
                placeholder="name"
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
                placeholder="password"
                onChange={handleChange}
              />

              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="submit">
              <button>Sign In</button>
            </div>
            <a href='/signup'>Sign Up</a>
          </form>
        </div>
      </div>
    );
  };

  return <div>{render()}</div>;
};

export default SignIn;
