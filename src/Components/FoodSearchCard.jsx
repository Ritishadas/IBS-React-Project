import { useState } from "react";

const FoodSearchCard = () => {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a food name");
      return;
    }

    setLoading(true);
    setError("");
    setFoodData(null);

    const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
    const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;

    if (!APP_ID || !APP_KEY) {
      setError("API credentials are missing.");
      setLoading(false);
      return;
    }

    try {
      const encodedQuery = encodeURIComponent(query.trim());
      const response = await fetch(
  `https://api.edamam.com/api/food-database/v2/parser?type=public&ingr=${encodedQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
);


      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.hints || data.hints.length === 0) {
        setError("No food found.");
      } else {
        setFoodData(data.hints[0].food);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch food data.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="day-card">
      <div className="content">
        <h2>Search Food</h2>
        <p className="subtitle">Calories & nutrition info</p>

        <input
          type="text"
          placeholder="Search food (e.g. banana, 1 apple)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
          }}
        />

        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          style={{
            width: "97%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: loading || !query.trim() ? "#9ca3af" : "#16a34a",
            color: "#fff",
            cursor: loading || !query.trim() ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {error && (
          <p className="meal" style={{ color: "#dc2626", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {foodData && (
      <div style={{ marginTop: "16px" }}>
  <p className="meal">
    🍎 <strong>Food:</strong> {foodData.label}
  </p>

  <p className="meal">
    🔥 <strong>Calories:</strong>{" "}
    {Math.round(foodData.nutrients.ENERC_KCAL || 0)} kcal / 100g
  </p>

  <p className="meal">
    🥚 <strong>Protein:</strong>{" "}
    {Math.round(foodData.nutrients.PROCNT || 0)} g
  </p>

  <p className="meal">
    🍞 <strong>Carbs:</strong>{" "}
    {Math.round(foodData.nutrients.CHOCDF || 0)} g
  </p>

  <p className="meal">
    🥑 <strong>Fat:</strong>{" "}
    {Math.round(foodData.nutrients.FAT || 0)} g
  </p>
</div>

        )}
      </div>
    </div>
  );
};

export default FoodSearchCard;
