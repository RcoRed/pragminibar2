import LoginForm from './LoginForm.jsx';

import '../cssComponents/loginCard.css';

function LoginCard() {
  let buttonAssistance={
    text:"Request for assistance",
  };

  return (
    <div className='containerLoginCard marginBottom15'>
        <h1 className='marginBottom15'>13AR</h1>
        <LoginForm />
    </div>
  );
};

export default LoginCard;