function CardAbout({ title_card, desc_card, img }) {
  return (
    <>
      <div className="img-about group">
        {img}
        <h3>{title_card}</h3>
        <p>{desc_card}</p>
      </div>
    </>
  );
}

function TechAbout() {
  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "GitHub",
    "Docker",
    "Postman",
    "VisualCode Studio",
    "Figma",
  ];

  return (
    <>
      {technologies.map((tech, index) => (
        <div
          key={tech}
          className="px-4 py-2 bg-primary text-(--color-foreground) rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
        >
          {tech}
        </div>
      ))}
    </>
  );
}

export default CardAbout;
export { TechAbout };
