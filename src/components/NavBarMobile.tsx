import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarMobile() {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisibleBurgerMenu = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="flex justify-between p-5">
        <div className="">
          <img src="/public/assets/logo/logo.jpg" alt="Logo Zytho lien Home" />
        </div>
        <img
          onClick={handleVisibleBurgerMenu}
          src="/public/assets/logo/menu.svg"
          alt=""
        />
      </div>
      {visible && (
        <nav className="w-[70%] h-[30vh] p-10 text-lg absolute bg-white right-0">
          <ul className="flex flex-col justify-around items-center gap-14 w-3/4 m-auto">
            <li>
              <Link onClick={handleVisibleBurgerMenu} to={"/beers"}>
                Liste des Bières
              </Link>
            </li>
            <li>
              <Link onClick={handleVisibleBurgerMenu} to={"/breweries"}>
                Liste des Brasserie
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBarMobile;
