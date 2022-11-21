import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Kasa" />
      </Link>
    </div>
  );
};
export default Logo;
