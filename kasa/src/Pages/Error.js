import React from "react";
import { Link } from "react-router-dom";
import "./../styles/pages/_error.scss";

const Error = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__h1">404</h1>
      <p className="not-found__p">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="not-found__a">Retourner sur la page d'accueil</Link>
    </div>
  );
};
export default Error;
