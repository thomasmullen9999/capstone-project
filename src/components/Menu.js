import React from "react";

const menuItems = [
  {
    name: "Tomato Bread",
    description:
      "Grilled bread topped with ripe tomatoes, garlic, and olive oil.",
    image: "/images/tomatobread.jpg",
  },
  {
    name: "Pasta",
    description: "Classic Italian pasta with fresh basil and parmesan.",
    image: "/images/pasta.jpg",
  },
  {
    name: "Salad",
    description: "Crisp garden salad with seasonal greens and vinaigrette.",
    image: "/images/salad.jpg",
  },
  {
    name: "Baguette",
    description: "Freshly baked French baguette with a crispy crust.",
    image: "/images/baguette.jpg",
  },
];

function Menu() {
  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h2 className="menu-item-name">{item.name}</h2>
            <p className="menu-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
