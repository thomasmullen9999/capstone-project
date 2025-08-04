const Specials = () => {
  const specialDishes = [
    {
      name: "Lemon Herb Chicken",
      description: "Grilled chicken marinated in fresh lemon juice and herbs.",
      price: "$18",
    },
    {
      name: "Mediterranean Salad",
      description:
        "Mixed greens with olives, feta cheese, cucumbers, and a tangy vinaigrette.",
      price: "$12",
    },
    {
      name: "Seafood Paella",
      description:
        "Traditional Spanish rice dish with shrimp, mussels, and saffron.",
      price: "$22",
    },
    {
      name: "Lemon Tart",
      description:
        "Creamy lemon tart with a buttery crust and fresh whipped cream.",
      price: "$8",
    },
  ];

  return (
    <section className="specials">
      <h2>Today's Specials</h2>
      <ul className="specials-list">
        {specialDishes.map((dish, index) => (
          <li key={index} className="special-item">
            <h3>
              {dish.name} - <span>{dish.price}</span>
            </h3>
            <p>{dish.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specials;
