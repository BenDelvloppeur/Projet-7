import logoFooter from "../assets/logo-footer.png";
import "../styles/_footer.scss";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-div">
        <img src={logoFooter} alt="Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
