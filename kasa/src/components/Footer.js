import logoFooter from "../assets/logo-footer.png";
import "../styles/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__div">
        <img src={logoFooter} alt="Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
