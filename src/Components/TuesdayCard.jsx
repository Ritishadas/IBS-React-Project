import "./DayCard.css";
import southfood from "../assets/shreyak-singh-gFB1IPmH6RE-unsplash.jpg";

const TuesdayCard = () => (
  <div className="day-card">
    <img className="day-img" src={southfood} alt="South Indian food" />

    <div className="content">
      <h2>Tuesday</h2>
      <p className="subtitle">IBS-D Friendly Meal Plan</p>

      <p className="meal"><strong>Breakfast:</strong> Plain Dosa + Boiled-Apple </p>
      <p className="meal"><strong>Lunch:</strong> Rice + Dal + Egg Curry </p>
      <p className="meal"><strong>Snack:</strong> Idli (1)</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Egg Curry</p>

      <div className="footer">
        <span className="ibs safe">✅ Safe</span>
        <span className="cal">~1080 kcal</span>
      </div>
    </div>
  </div>
);

export default TuesdayCard;
