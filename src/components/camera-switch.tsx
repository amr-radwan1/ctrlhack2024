interface CameraSwitchProps {
  onSwitch: () => void;
}

export default function CameraSwitch({ onSwitch }: CameraSwitchProps) {
  return (
    <button
      id="camera-switch"
      className="button"
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        zIndex: 1,
      }}
      onClick={onSwitch}
    >
      <div className="icon" style={{ mask: "url(./switch.svg)" }}></div>
    </button>
  );
}
