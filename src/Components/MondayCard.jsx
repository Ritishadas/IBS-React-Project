import "./DayCard.css";

const MondayCard = () => (
  <div className="day-card">
    <img className="day-img" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" />
    <div className="content">
      <h2>Monday</h2>
      <p className="subtitle">IBS-D Friendly Meal Plan</p>

      <p className="meal"><strong>Breakfast:</strong> Idli (2) + Boiled Egg (1) + Banana</p>
      <p className="meal"><strong>Lunch:</strong> Rice + Dal + Sabji</p>
      <p className="meal"><strong>Snack:</strong> Poha (small bowl)</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Chicken (100g)</p>

      <div className="footer">
        <span className="ibs safe">✅ Safe</span>
        <span className="cal">~1100 kcal</span>
      </div>
    </div>
  </div>
);

export default MondayCard;
