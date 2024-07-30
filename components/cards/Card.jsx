//styles import
import { useState } from "react";
import "./Card.scss";

const Card = ({
  renderIcon,
  index,
  movesCount,
  cardData,
  setMovesCount,
  openCardsData,
  setOpenCardsData,
}) => {
  const IconComponent = renderIcon;
  const isActive =
    openCardsData?.findIndex((card) => card?.id === index) !== -1;

  const handleClick = () => {
    if (isActive) return;
    let ele = document.getElementById(index);
    let openCards = structuredClone(openCardsData);
    if (ele) {
      let isMatched =
        openCardsData?.findIndex((card) => card?.name === cardData?.name) !==
        -1;
      let newOpenCard = {
        id: index,
        name: cardData.name,
      };
      openCards.push(newOpenCard);
      setOpenCardsData((prev) => {
        return openCards;
      });
      if (!isMatched && movesCount % 2 !== 0) {
        setTimeout(() => {
          let newOpenCards = openCards?.filter(
            (card) => card.name !== cardData.name
          );
          newOpenCards.splice(newOpenCards.length - 1, 1);
          setOpenCardsData(newOpenCards);
        }, 1000);
      }
      setMovesCount((prev) => prev + 1);
    }
  };
  return (
    <div className="card">
      <div
        id={index}
        className={isActive ? "face face-back" : "face face-front"}
        onClick={() => handleClick()}
      >
        {isActive ? <IconComponent /> : null}
      </div>
    </div>
  );
};

export default Card;
