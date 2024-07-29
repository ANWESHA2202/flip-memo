//styles import
import "./Card.scss";

const Card = ({ renderIcon }) => {
  const IconComponent = renderIcon;
  return (
    <div className="card">
      <div className="face face-front"></div>
      <div className="face face-back">{<IconComponent />}</div>
    </div>
  );
};

export default Card;
