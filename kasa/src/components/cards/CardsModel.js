import { Link } from "react-router-dom";
import "./../../styles/cards/_cards-details.scss";

const CardsModel = (props) => {
  const { title, cover, id } = props;
  return (
    <article className="card">
      <Link to={id}>
        <p>{title}</p>
        <img src={cover} alt="" />
      </Link>
    </article>
  );
};
export default CardsModel;
