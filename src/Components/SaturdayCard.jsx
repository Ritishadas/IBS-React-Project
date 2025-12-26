import "./DayCard.css";

const SaturdayCard = () => (
  <div className="day-card">
    <img className="day-img" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />
    <div className="content">
      <h2>Saturday</h2>
      <p className="subtitle">IBS-D Friendly Meal Plan</p>

      <p className="meal"><strong>Breakfast:</strong> Plain Dosa</p>
      <p className="meal"><strong>Lunch:</strong> Rice + Dal + Boiled-Apple</p>
      <p className="meal"><strong>Snack:</strong> Boiled Egg</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Chicken</p>

      <div className="footer">
        <span className="ibs safe">✅ Safe</span>
        <span className="cal">~1150 kcal</span>
      </div>
    </div>
  </div>
);

export default SaturdayCard;
