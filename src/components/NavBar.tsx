import NavBarDek from "./NavBarDek.";
import NavBarMobile from "./NavBarMobile";

function NavBar() {
  return (
    <div className="">
      <div className="hidden sm:block">
        <NavBarDek />
      </div>
      <div className="block sm:hidden">
        <NavBarMobile />
      </div>
    </div>
  );
}

export default NavBar;
