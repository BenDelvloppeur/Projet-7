import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="logo">
      <a href="/home">
        <img src={logo} alt="Kasa" />
      </a>
    </div>
  );
}
export default Logo;
