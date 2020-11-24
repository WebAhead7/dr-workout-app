import './Button.css';
import { useHistory } from 'react-router-dom';
const Button = ({ text, href }) => {
  const history = useHistory();
  return (
    <button className="Button" onClick={() => history.push(`${href}`)}>
      {text}
    </button>
  );
};

export default Button;
