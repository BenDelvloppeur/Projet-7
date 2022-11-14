import banner from "../../assets/banner.png";
import "../../styles/home/_banner-home.scss";

function BannerHome() {
  return (
    <div className="banner-img">
      <img src={banner} alt="Bannière d'accueil" />
      <div className="banner-slogan">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default BannerHome;
