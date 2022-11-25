// import banner from "../assets/banner.png";
import "../styles/_banner.scss";

// Props pour changer seulement l'image du composant et le text si besoin.
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
