import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" className="nav-active">
        Accueil
      </NavLink>
      <NavLink to="/a-propos" className="nav-active">
        A Propos
      </NavLink>
    </div>
  );
}

export default Navigation;
