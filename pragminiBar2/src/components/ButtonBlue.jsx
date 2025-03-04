import '../cssComponents/buttonBlue.css'

function ButtonBlue({data}) {
  let {text,buttonClass="",eventi} = data;

  return (
    <button type="button" {...eventi} className={"buttonBlue " + buttonClass}>{text}</button>
  )
}

export default ButtonBlue;