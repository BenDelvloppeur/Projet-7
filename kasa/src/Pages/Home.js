import bannerImg from "./../assets/banner-home.png";
import logements from "./../Datas/logements.json";
import { Link } from "react-router-dom";
import "./../styles/pages/_home.scss";

import Banner from "../components/Banner";
import CardsModel from "../components/Cards/CardsModel";

const Home = () => {
  return (
    <>
      <Banner urlImage={bannerImg} text="Chez vous, partout et ailleurs" />
      <main>
        <section className="section">
          {logements.map((logements) => {
            return (
              <article key={logements.id} className="section__article">
                <Link to={`/logements/${logements.id}`}>
                  <CardsModel image={logements.cover} title={logements.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
