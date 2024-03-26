import './Input.css'

const Input = ({type, width, textAlign='left', padding, required, inputValue, changedValue}) => {
 
  const typedValue = (e) => {
    changedValue(e.target.value)
  }

  return (
    <input
      className='main-input'
      type={type}
      style={{ width: width, textAlign: textAlign, padding: padding }}
      value={inputValue}
      onChange={typedValue}
      required={required}
    />
  )
}

export default Input