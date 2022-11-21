// import banner from "../assets/banner.png";
import "../styles/_banner.scss";

const Banner = (props) => {
  const { urlImage, text } = props;

  return (
    <div className="banner-img">
      <img src={urlImage} alt="Bannière d'accueil" />
      <div className="banner-slogan">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Banner;
