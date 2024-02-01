import "./Header.scss";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header1__logowrapper">
        <Link to="/" className="header1__logolink">
          <img src={Logo} alt="Logo" className="header1__logo" />
        </Link>
      </div>
      <div className="header__title">Movie Explorer</div>
    </div>
  );
}

export default Header;
