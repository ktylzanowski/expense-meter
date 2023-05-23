import "../NewExpense/NewExpense.css";

const LoginButton = (props) => {
  const handleLogin = () => {
    props.onLogin()
  }
  
  const handleRegister = () =>{
    props.onRegister()
  }
  return (
    <div className="new-expense">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default LoginButton;
