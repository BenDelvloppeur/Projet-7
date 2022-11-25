import "../../styles/header/_header.scss";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {

  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;
