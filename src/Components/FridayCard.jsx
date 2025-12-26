import "./DayCard.css";
import food from "../assets/image.png";

const FridayCard = () => (
  <div className="day-card">
    <img className="day-img" src={food} alt="IBS friendly Indian meal" />

    <div className="content">
      <h2>Friday</h2>
      <p className="subtitle">IBS-D Friendly Meal Plan</p>

      <p className="meal"><strong>Breakfast:</strong> Idli + Egg</p>
      <p className="meal"><strong>Lunch:</strong> Rice + Chicken</p>
      <p className="meal"><strong>Snack:</strong> Poha</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Dal</p>

      <div className="footer">
        <span className="ibs safe">✅ Safe</span>
        <span className="cal">~1100 kcal</span>
      </div>
    </div>
  </div>
);

export default FridayCard;
