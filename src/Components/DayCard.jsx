import "./DayCard.css";

const DayCard = ({ day, subtitle, image, meals, ibsClass, ibsText, calories }) => {
  return (
    <div className="day-card">
      <img className="day-img" src={image} alt={day} />

      <div className="content">
        <h2>{day}</h2>
        <p className="subtitle">{subtitle}</p>

        {meals.map((meal, index) => (
          <p className="meal" key={index}>
            <strong>{meal.label}:</strong> {meal.value}
          </p>
        ))}

        <div className="footer">
          <span className={`ibs ${ibsClass}`}>{ibsText}</span>
          <span className="cal">{calories}</span>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
