import React from "react";
import Players from "./Players";

const PlayersList = () => {
  const PlayersList = [
    {
      nom: "Lionel Messi",
      equipe: "Paris Saint-Germain",
      nationalite: "Argentine",
      numeroMaillot: 30,
      age: 34,
      imageUrl: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
    },
    {
      nom: "Cristiano Ronaldo",
      equipe: "Équipe du Portugal de football",
      nationalite: "Portugal",
      numeroMaillot: 4,
      age: 39,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/375px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
    },
    {
      nom: "Neymar",
      equipe: "Paris Saint-Germain",
      nationalite: "Brésil",
      numeroMaillot: 10,
      age: 34,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg",
    },
    {
      nom: "Kylian Mbappé",
      equipe: "Equipe de Brésil de football",
      nationalite: "Argentine",
      numeroMaillot: 30,
      age: 32,
      imageUrl:
        "https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {PlayersList.map((player, index) => {
        return (
          <div key={index}>
            <Players player={player} />
          </div>
        );
      })}
      ;
    </div>
  );
};
export default PlayersList;
