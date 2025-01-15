import { Link } from "react-router-dom";
import LogoFacebook from "../../public/assets/logo/facebook.svg";
import LogoInsta from "../../public/assets/logo/insta.svg";
import LogoEmail from "../../public/assets/logo/mail.svg";

function Footer() {
  return (
    <div className="min-h-[220px] w-full mt-10 bg-[#212121] text-white">
      <nav className="flex flex-col md:flex-row justify-around items-center gap-8 p-10 text-lg">
        <ul className="flex md:flex-col sm:flex-row items-start">
          <li className="">
            <Link to="/breweries">Liste de nos brasseries</Link>
          </li>
          <li>
            <Link to={"/beers"}>Liste de nos bières</Link>
          </li>
        </ul>
        <ul className="flex gap-7 items-center">
          <li className="">
            <a href="https://www.facebook.com/">
              <img src={LogoFacebook} alt="Lien facebook" />
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com/"}>
              <img src={LogoInsta} alt="Lien Instagram" />
            </a>
          </li>
          <li>
            <a href="mailto:zytho-front@email.com?subject=Hello%20Zytho&body=Bonjour,%20je%20vous%20contacte%20à%20propos%20de...">
              <img src={LogoEmail} alt="Logo envoyer un email" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="">
            <address>
              La Brasserie du Houblon Doré <br />
              33, Rue des Cuves Mousseuses <br />
              Ville-Ambrée, 45200 France
            </address>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
