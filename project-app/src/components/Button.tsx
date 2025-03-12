interface Props {
    text: string;
    color: string;
    onClick: () => void;
}
const Button = ({text, color, onClick}:Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{text}</button>
  )
}

export default Button