import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((e) => {
        return (
          <article key={e.id} className="menu-item">
            <img src={e.img} alt={e.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{e.title}</h4>
                <h4 className="price">${e.price}</h4>
              </header>
              <p className="item-text">{e.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
