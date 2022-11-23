// import banner from "../assets/banner.png";
import "../styles/_banner.scss";

const Banner = (props) => {
  const { urlImage, text } = props;

  return (
    <div className="banner">
      <img src={urlImage} alt="Bannière d'accueil" className="banner__img" />
      <div className="banner__slogan">
        <p className="banner__slogan__p">{text}</p>
      </div>
    </div>
  );
};

export default Banner;
