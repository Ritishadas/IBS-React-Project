import { ibsFoodLists } from "./ibsFoodLists";
import "./IBSFoodBoard.css";

const IBSFoodBoard = () => {
  return (
    <div className="day-card ibs-board-card">
      {/* 🔥 ibs-board-card added */}
      <div className="content">
        <div className="ibs-board">
          {Object.values(ibsFoodLists).map((list, index) => (
            <div key={index} className="ibs-column">
              <h3>{list.title}</h3>

              <div className="ibs-scroll">
                {list.foods.map((food, i) => (
                  <div key={i} className="ibs-food">
                    {food}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IBSFoodBoard;
