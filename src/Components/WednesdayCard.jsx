import "./DayCard.css";

const WednesdayCard = () => (
  <div className="day-card">
    <img className="day-img" src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" />
    <div className="content">
      <h2>Wednesday</h2>
      <p className="subtitle">IBS-D Friendly Meal Plan</p>

      <p className="meal"><strong>Breakfast:</strong> Poha + Any-fruit</p>
      <p className="meal"><strong>Lunch:</strong> Rice + Fish</p>
      <p className="meal"><strong>Snack:</strong> Boiled Egg</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Dal</p>

      <div className="footer">
        <span className="ibs safe">✅ Safe</span>
        <span className="cal">~1120 kcal</span>
      </div>
    </div>
  </div>
);

export default WednesdayCard;
