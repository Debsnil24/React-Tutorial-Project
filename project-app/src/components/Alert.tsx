interface Props {
  text: string;
  color: string;
  onClose: () => void;
}

const Alert = ({ text, color, onClose }: Props) => {
  return (
    <div
      className={"alert alert-dismissible fade show alert-" + color}
      role="alert"
    >
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose} 
      ></button>
    </div>
  );
};

export default Alert;
