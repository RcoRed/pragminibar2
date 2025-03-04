//import '../../cssComponents/cssInputs/InputPassword.css';

function InputPassword({data}) {
    //object destructuring
    let {label=null,idInput,name,placeholder=" ",inputClass="",labelClass="",divClass=""} = data;
  
    //se non passo nessun label, ritorno solo l'input
    if(label == null){
      return (
        <input type="password" id={idInput} name={name} placeholder={placeholder}  className={"inputPassword " + inputClass}></input>
      )
    }
  
    //ritorno label e input
    return (
      <div className={"containerInput " + divClass}>
        <label htmlFor={name} className={"labelInputPassword " + labelClass}>{label}</label>
        <input type="password" id={idInput} name={name} placeholder={placeholder}  className={"inputPassword " + inputClass}></input>
      </div>
    )
  };
  
  export default InputPassword;

  /*
  Tip:
  - The InputPassword component is a functional component that receives an object as a prop.
  - The object contains the following properties: label, idInput, name, placeholder, inputClass, labelClass, and divClass.
  - The component returns an input element with type password and an optional label element.
  - The label element is displayed only if the label property is not null.
  - The component uses object destructuring to extract the properties from the data object.
  - To display the label as a floating label, add to the labelClass property the value "floatigLabel".
  */