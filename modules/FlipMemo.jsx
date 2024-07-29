//data import
import cardsData from "../cards";
//components import
import Card from "../components/cards/Card";
//styles import
import "./FlipMemo.scss";

const FlipMemo = () => {
  return (
    <div className="cardsContainer">
      {cardsData?.map((cardData) => {
        return <Card renderIcon={cardData?.icon} />;
      })}
    </div>
  );
};

export default FlipMemo;
