import './SpanButton.css'

const SpanButton = (props) => {

  return (
    <span className={`span-btn ${props.hoverClass}`} onClick={props.onClick}>
      {props.children}
    </span>
  )
}

export default SpanButton