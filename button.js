const Button = ({ color, text, onClick }) => {
  return <button onClick={onClick} style={{ backgroundColor: "brown" }} className="btn">{text}</button>
}
export default Button