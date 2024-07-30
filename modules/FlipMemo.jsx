//hooks import
import { useEffect, useState } from "react";
//data import
import cardsData from "../cards";
//components import
import Card from "../components/cards/Card";
//styles import
import "./FlipMemo.scss";

const FlipMemo = () => {
  const [movesCount, setMovesCount] = useState(0);
  const [openCardsData, setOpenCardsData] = useState([]);

  useEffect(() => {
    if (openCardsData.length === cardsData.length) {
      setTimeout(() => {
        alert(`Yayyy! you won the game in ${movesCount} moves`);
      }, 2000);
    }
  }, [movesCount]);

  return (
    <>
      <div className="cardsContainer">
        {cardsData?.map((cardData, index) => {
          return (
            <Card
              key={index}
              index={`face_${index}`}
              cardData={cardData}
              openCardsData={openCardsData}
              setOpenCardsData={setOpenCardsData}
              renderIcon={cardData?.icon}
              movesCount={movesCount}
              setMovesCount={setMovesCount}
            />
          );
        })}
      </div>
      <p>Your Moves : {movesCount}</p>
    </>
  );
};

export default FlipMemo;
