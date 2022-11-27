import bannerImg from "./../assets/banner-home.png";
import logements from "./../Datas/logements.json";
import { Link } from "react-router-dom";
import "./../styles/pages/_home.scss";

import Banner from "../components/Banner";
import CardsModel from "../components/Cards/CardsModel";

const Home = () => {
  return (
    <>
      <Banner
        customClass="class_test"
        urlImage={bannerImg}
        text="Chez vous, partout et ailleurs"
      />
      <section className="section">
        {/* On map la base de donnée. */}
        {logements.map((logements) => {
          return (
            // toujours la valeur clé à renseigner apres un .map, on récupère l'id,
            // l'image de couverture et le titre.
            <article key={logements.id} className="section__article">
              <Link to={`/logements/${logements.id}`}>
                <CardsModel image={logements.cover} title={logements.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Home;
