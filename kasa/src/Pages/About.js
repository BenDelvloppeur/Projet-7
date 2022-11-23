import bannerImg from "./../assets/banner-about.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse/Collapse";
import aboutdata from "./../Datas/aboutData";
import "./../styles/pages/_about.scss";
const About = () => {
  const description = (title) => {
    switch (title) {
      case "fiability":
        return aboutdata.fiability;
      case "respect":
        return aboutdata.respect;
      case "service":
        return aboutdata.service;
      case "security":
        return aboutdata.security;
      default:
        console.log("default");
        break;
    }
  };
  return (
    <>
      <Banner urlImage={bannerImg} />
      <div className="about">
        <Collapse title="Fiabilité" description={description("fiability")} />
        <Collapse title="Respect" description={description("respect")} />
        <Collapse title="Service" description={description("service")} />
        <Collapse
          title="Responsabilité"
          description={description("security")}
        />
      </div>
    </>
  );
};
export default About;
