import "./../../styles/appartements/_slider.scss";

const Slider = (props) => {
  const { arrowRight, arrowLeft } = props;
  return (
    <>
      <div className="slider">
        <div className="slider-window">
          <img className="arrow-right" src={arrowRight} alt="Flèches Droite" />
          <img className="arrow-left" src={arrowLeft} alt="Flèches Gauche" />
          <p className="number-indicatif">1/5</p>
          <div className="slider-derouler">
            <img
              className="image-slider"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
              alt=""
            />
            <img
              className="image-slider"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
              alt=""
            />
            <img
              className="image-slider"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
              alt=""
            />
            <img
              className="image-slider"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"
              alt=""
            />
            <img
              className="image-slider"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
