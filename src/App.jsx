import MondayCard from "./Components/MondayCard";
import TuesdayCard from "./Components/TuesdayCard";
import WednesdayCard from "./Components/WednesdayCard";
import ThursdayCard from "./Components/ThursdayCard";
import FridayCard from "./Components/FridayCard";
import SaturdayCard from "./Components/SaturdayCard";
import SundayCard from "./Components/SundayCard";

const App = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🌿 IBS-D Weekly Meal Planner</h1>
      <p style={styles.subheading}>
        Simple, Indian, gut-friendly meals
      </p>

      <div style={styles.grid}>
        <MondayCard />
        <TuesdayCard />
        <WednesdayCard />
        <ThursdayCard />
        <FridayCard />
        <SaturdayCard />
        <SundayCard />
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "40px 20px",
    boxSizing: "border-box",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "8px",
  },
  subheading: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "28px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

export default App;
