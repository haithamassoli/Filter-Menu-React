import React from "react";

const Categories = (props) => {
  let category = Array.from(props.items);

  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => props.filterItems("all")}
      >
        all
      </button>
      {category.map((e) => {
        return (
          <button
            key={e}
            type="button"
            onClick={() => props.filterItems(e)}
            className="filter-btn"
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
