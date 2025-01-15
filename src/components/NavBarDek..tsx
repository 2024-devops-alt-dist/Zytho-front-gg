import { Link } from "react-router-dom";

function NavBarDek() {
  return (
    <nav className="p-10 text-lg">
      <ul className="flex justify-around items-center gap-8 w-3/4 m-auto">
        <li className="">
          <img src="/public/assets/logo/logo.jpg" alt="Logo Zytho lien Home" />
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

export default NavBarDek;
