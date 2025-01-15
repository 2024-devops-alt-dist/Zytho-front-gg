import { Link } from "react-router-dom";

interface ButtonProps {
  path: string;
  element?: "card" | "detail";
}

const Button = ({ path, element = "card" }: ButtonProps) => {
  return (
    <Link to={path}>
      <button className="button-active w-full">
        {element === "card" ? "Détails" : "Acheter"}
      </button>
    </Link>
  );
};

export default Button;
