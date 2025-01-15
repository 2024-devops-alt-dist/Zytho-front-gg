import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-[80%] p-10 text-lg">
      <ul className="flex justify-around items-center gap-8 w-3/4 m-auto">
        <li className="mr-44">
          <Link to="/">
            <img
              className="w-full"
              src="/public/assets/logo/logo.jpg"
              alt="Logo Zythologue front"
            />
          </Link>
        </li>
        <li>
          <Link to={"/beers"}>Liste des Bières</Link>
        </li>
        <li>
          <Link to={"/breweries"}>Liste des Brasserie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
