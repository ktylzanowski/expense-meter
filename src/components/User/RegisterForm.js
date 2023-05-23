import "./LoginForm.css";
import Card from "../UI/Card";

const RegisterForm = (props) => {
  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div>
      <form>
        <Card className="login-form">
          <div className="login-form__controls">
            <div className="login-form__control">
              <label>Login</label>
              <input type="text"></input>
            </div>
            <div className="login-form__control">
              <label>password</label>
              <input type="pssword"></input>
            </div>
            <div className="login-form__control">
              <label>repeat password</label>
              <input type="pssword"></input>
            </div>
            <div className="login-form__buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button>Register</button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default RegisterForm;
