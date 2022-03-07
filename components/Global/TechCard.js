const TechCard = ({ item }) => {
  return (
    <div className="tech_card">
      <div className="icon">{item.icon}</div>
      <p>{item.title}</p>
    </div>
  );
};

export default TechCard;
