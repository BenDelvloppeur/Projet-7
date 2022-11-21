import bannerImg from "./../../assets/banner-home.png";
// import styles from "./../../styles/header/_teste.module.scss";

import Banner from "../Banner";
import CardsList from "../cards/CardsList";

const Home = () => {
  return (
    <>
      <Banner urlImage={bannerImg} text="Chez vous, partout et ailleurs" />
      <main>
        <CardsList />
      </main>
    </>
  );
}

export default Home;
