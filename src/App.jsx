import React from "react";
import PlayersList from "./component/player/PlayersList";

function App() {
  return (
    <React.Fragment>
      <div className="card">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          DES JOUEURS DE FOOTBALL
        </h1>
        <br />
        <PlayersList />
      </div>
    </React.Fragment>
  );
}

export default App;
