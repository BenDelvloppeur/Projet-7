import React from "react";
import "./../../styles/appartements/_server.scss";

const Server = ({ host }) => {
  // .split qui permet de récupérer le nom et le prénom dans la même string
  const hostSplit = host.name.split(" ");
  const [name, lastname] = hostSplit;

  return (
    <div className="server">
      <div className="server__name">
        {/* .trim permet de retirer les blancs (espace) en début et fin de chaîne */}
        <p className="server__firstname">{name.trim()}</p>
        <p className="server__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="Profil de la personne" className="server__picture" />
    </div>
  );
};

export default Server;
