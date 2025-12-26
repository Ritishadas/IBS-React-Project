import "./DayCard.css";

const SundayCard = () => (
  <div className="day-card">
    <img className="day-img" src="https://images.unsplash.com/photo-1606787366850-de6330128bfc" />
    <div className="content">
      <h2>Sunday</h2>
      <p className="subtitle">Flexible / Cheat Day</p>

      <p className="meal"><strong>Meals:</strong> Preferred safe foods</p>
      <p className="meal"><strong>Note:</strong> Mindful portions</p>

      <div className="footer">
        <span className="ibs flex">🟡 Flexible</span>
        <span className="cal">~1200–1300 kcal</span>
      </div>
    </div>
  </div>
);

export default SundayCard;
