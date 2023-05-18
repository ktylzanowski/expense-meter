import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faRegistered } from '@fortawesome/free-solid-svg-icons';

const User = () => {
  return (
    <div className="user-cart">
      <FontAwesomeIcon className="login-icon" icon={faRightToBracket} />
      <FontAwesomeIcon className="login-icon" icon={faRegistered} />
    </div>
  );
};

export default User;
