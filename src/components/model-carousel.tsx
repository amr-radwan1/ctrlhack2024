interface ModelCarouselProps {
  onChange: (modelName: string) => void;
}

export default function ModelCarousel({ onChange }: ModelCarouselProps) {
  return (
    <div id="courosel" className="carousel">
      <input
        type="radio"
        name="model"
        value="empty"
        className="carousel-item"
        defaultChecked={true}
        onChange={() => onChange("empty")}
      />
      <input
        type="radio"
        name="model"
        value="heart"
        className="carousel-item"
        style={{ backgroundImage: "url(./heart.webp)" }}
        defaultChecked={false}
        onChange={() => onChange("heart")}
      />
      <input
        type="radio"
        name="model"
        value="lungs"
        className="carousel-item"
        style={{ backgroundImage: "url(./lungs.webp)" }}
        onChange={() => onChange("lungs")}
      />
      <input
        type="radio"
        name="model"
        value="intestines"
        className="carousel-item"
        style={{ backgroundImage: "url(./intestines.webp)" }}
        onChange={() => onChange("intestines")}
      />
    </div>
  );
}
