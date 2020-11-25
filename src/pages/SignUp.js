import { useState } from 'react';

const SignUp = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    errors: {
      name: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let errors = state.errors;
    switch (name) {
      case 'name':
        errors.name = value.length < 5 ? 'Name is too short' : '';
        break;
      case 'password':
        errors.password = value.length < 5 ? 'Password is too short' : '';
        break;
      case 'confirmPassword':
        console.log(state);
        errors.confirmPassword =
          state.password !== value ? 'Passwords do not match' : '';
        break;
      default:
    }

    setState({ ...state, errors, [name]: value });
  };

  const clearErros = (errors) => {
    const newErrors = { ...errors };
    for (const error in newErrors) {
      newErrors[error] = '';
    }
    return newErrors;
  };

  const saveOnLocalStorage = (name, password) => {
    window.localStorage.setItem(name, password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateErrors(state.errors)) {
      console.log('Valid form');
      saveOnLocalStorage(state.name, state.password);
    } else {
      console.log('Invalid form');
    }
  };

  const validateErrors = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (error) => error.length > 0 && (valid = false)
    );
    return valid;
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="password"
          onChange={handleChange}
        />
        <hr />
        {errors.confirmPassword.length > 0 && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        <hr />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default SignUp;
