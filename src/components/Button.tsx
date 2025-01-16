import { Link } from "react-router-dom";

interface ButtonProps {
  path?: string;
  labelButton: string;
  onClick?: () => void;
}

const Button = ({ path, labelButton: element, onClick }: ButtonProps) => {
  return (
    <Link to={path ? path : "/"}>
      <button onClick={onClick} className="button-active w-full">
        {element}
      </button>
    </Link>
  );
};

export default Button;
