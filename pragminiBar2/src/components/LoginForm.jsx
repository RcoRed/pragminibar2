import InputPassword from './inputs/InputPassword';
import ButtonBlue from './ButtonBlue';

//import '../styles/formLogin.css';

function LoginForm() {

  let inputPassword = {
    label:"Id Utente", 
    idInput:"idUtente", 
    name:"idUtente",
    labelClass:"floatingLabel",
  };
  let buttonBlue = {
    text:"Login",
    eventi:{
      onClick:()=>{alert("Login effettuato")},
    },
  };

  return (
    <div>
      <form action="GET">

        <InputPassword data={inputPassword}></InputPassword>
        <ButtonBlue data={buttonBlue}></ButtonBlue>

      </form>
    </div>
  )
};

export default LoginForm;