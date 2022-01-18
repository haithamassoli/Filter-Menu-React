import React from "react";

const Categories = ({ filterItems, items }) => {
  // let ha = items.map((e) => {
  //   return e;
  // });
  // console.log(ha);
  // const categories = props.cate;
  // let cate = items.map((e) => {
  //   return e.category;
  // });

  // let filterCate = new Set(cate);
  // let hait = filterCate.forEach((e) => {
  //   return e;
  // });
  // console.log(hait);
  let category = Array.from(items);

  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => filterItems("all")}
      >
        all
      </button>
      {category.map((e) => {
        return (
          <button
            key={e}
            type="button"
            onClick={() => filterItems(e)}
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
