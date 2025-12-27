import DayCard from "./Components/DayCard";
import FoodSearchCard from "./Components/FoodSearchCard";
import southfood from "./assets/shreyak-singh-gFB1IPmH6RE-unsplash.jpg";
import fridayImg from "./assets/image.png";

const App = () => {
  const days = [
    {
      day: "Monday",
      subtitle: "IBS-D Friendly Meal Plan",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      meals: [
        { label: "Breakfast", value: "Idli (2) + Boiled Egg (1) + Banana" },
        { label: "Lunch", value: "Rice + Dal + Sabji" },
        { label: "Snack", value: "Poha (small bowl)" },
        { label: "Dinner", value: "Rice + Chicken (100g)" },
      ],
      ibsClass: "safe",
      ibsText: "✅ Safe",
      calories: "~1100 kcal",
    },
    {
      day: "Tuesday",
      subtitle: "IBS-D Friendly Meal Plan",
      image: southfood,
      meals: [
        { label: "Breakfast", value: "Plain Dosa + Boiled Apple" },
        { label: "Lunch", value: "Rice + Dal + Egg Curry" },
        { label: "Snack", value: "Idli (1)" },
        { label: "Dinner", value: "Rice + Egg Curry" },
      ],
      ibsClass: "safe",
      ibsText: "✅ Safe",
      calories: "~1080 kcal",
    },
    {
      day: "Wednesday",
      subtitle: "IBS-D Friendly Meal Plan",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      meals: [
        { label: "Breakfast", value: "Poha + Any fruit" },
        { label: "Lunch", value: "Rice + Fish" },
        { label: "Snack", value: "Boiled Egg" },
        { label: "Dinner", value: "Rice + Dal" },
      ],
      ibsClass: "safe",
      ibsText: "✅ Safe",
      calories: "~1120 kcal",
    },
    {
      day: "Thursday",
      subtitle: "Portion-Control Day",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d",
      meals: [
        { label: "Breakfast", value: "Idli (2) + Any fruit" },
        { label: "Lunch", value: "Rice + Dal + Sabji + Fish" },
        { label: "Snack", value: "Half Dosa" },
        { label: "Dinner", value: "Rice + Dal + Fish" },
      ],
      ibsClass: "warning",
      ibsText: "⚠️ Portion Safe",
      calories: "~1050 kcal",
    },
    {
      day: "Friday",
      subtitle: "IBS-D Friendly Meal Plan",
      image: fridayImg,
      meals: [
        { label: "Breakfast", value: "Idli + Egg" },
        { label: "Lunch", value: "Rice + Chicken" },
        { label: "Snack", value: "Poha" },
        { label: "Dinner", value: "Rice + Dal" },
      ],
      ibsClass: "safe",
      ibsText: "✅ Safe",
      calories: "~1100 kcal",
    },
    {
      day: "Saturday",
      subtitle: "IBS-D Friendly Meal Plan",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      meals: [
        { label: "Breakfast", value: "Plain Dosa" },
        { label: "Lunch", value: "Rice + Dal + Boiled Apple" },
        { label: "Snack", value: "Boiled Egg" },
        { label: "Dinner", value: "Rice + Chicken" },
      ],
      ibsClass: "safe",
      ibsText: "✅ Safe",
      calories: "~1150 kcal",
    },
    {
      day: "Sunday",
      subtitle: "Flexible / Cheat Day",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      meals: [
        { label: "Meals", value: "Preferred safe foods" },
        { label: "Note", value: "Mindful portions" },
      ],
      ibsClass: "flex",
      ibsText: "🟡 Flexible",
      calories: "~1200–1300 kcal",
    },
  ];

  return (
    <div style={{ padding: "32px", background: "#f8fafc", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>
        🌿 IBS-D Weekly Meal Planner
      </h1>
      <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "32px" }}>
        Simple, Indian, gut-friendly meals
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          marginBottom: "48px",
        }}
      >
        <FoodSearchCard />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {days.map((day, index) => (
          <DayCard key={index} {...day} />
        ))}
      </div>
    </div>
  );
};

export default App;
