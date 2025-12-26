import "./DayCard.css";

const ThursdayCard = () => (
  <div className="day-card">
    <img className="day-img" src="https://images.unsplash.com/photo-1493770348161-369560ae357d" />
    <div className="content">
      <h2>Thursday</h2>
      <p className="subtitle">Portion-Control Day</p>

      <p className="meal"><strong>Breakfast:</strong> Idli (2) + Any-fruit</p>
      <p className="meal"><strong>Lunch:</strong> Rice + Dal + Sabji + Fish</p>
      <p className="meal"><strong>Snack:</strong> Half Dosa</p>
      <p className="meal"><strong>Dinner:</strong> Rice + Dal + Fish</p>

      <div className="footer">
        <span className="ibs warning">⚠️ Portion Safe</span>
        <span className="cal">~1050 kcal</span>
      </div>
    </div>
  </div>
);

export default ThursdayCard;
