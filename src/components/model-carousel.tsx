interface ModelCarouselProps {
  onChange: (modelName: string) => void;
}

export default function ModelCarousel({ onChange }: ModelCarouselProps) {
  return (
    <div id="courosel" className="carousel">
      <input
        type="radio"
        name="model"
        value="heart"
        className="carousel-item"
        style={{ backgroundImage: "url(./preview/heart.png)" }}
        defaultChecked={true}
        onChange={() => onChange("heart")}
      />
      <input
        type="radio"
        name="model"
        value="lungs"
        className="carousel-item"
        style={{ backgroundImage: "url(./preview/lungs.png)" }}
        onChange={() => onChange("lungs")}
      />
      <input
        type="radio"
        name="model"
        value="intestines"
        className="carousel-item"
        style={{ backgroundImage: "url(./preview/intestines.png)" }}
        onChange={() => onChange("intestines")}
      />
    </div>
  );
}
