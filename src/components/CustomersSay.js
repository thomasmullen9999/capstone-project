const CustomersSay = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      location: "New York, NY",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment:
        "The food at Little Lemon is absolutely amazing! The flavors are fresh and vibrant. Highly recommend the Lemon Herb Chicken.",
    },
    {
      name: "Mark Smith",
      location: "Chicago, IL",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      rating: 4,
      comment:
        "Great atmosphere and friendly staff. The seafood paella was delicious, though I wish the portion was a bit bigger.",
    },
    {
      name: "Sofia Lee",
      location: "San Francisco, CA",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment:
        "I love the Mediterranean salad! It’s fresh and perfect for a light meal. The customer service was top-notch too.",
    },
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <ul
        className="testimonial-list"
        style={{ listStyle: "none", padding: 0 }}
      >
        {testimonials.map((t, idx) => (
          <li
            key={idx}
            className="testimonial-item"
            style={{
              marginBottom: "2rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img
              src={t.image}
              alt={`${t.name} profile`}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h3>
                {t.name}{" "}
                <small style={{ fontWeight: "normal", color: "#555" }}>
                  ({t.location})
                </small>
              </h3>
              <div>{renderStars(t.rating)}</div>
              <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
                "{t.comment}"
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomersSay;
