import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav__active">
        Accueil
      </NavLink>
      <NavLink to="/a-propos" className="nav__active">
        A Propos
      </NavLink>
    </div>
  );
}

export default Navigation;
