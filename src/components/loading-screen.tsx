export default function LoadingScreen() {
  return (
    <div id="loadui" className="full-screen loadui">
      <div style={{ flexGrow: 1, alignContent: "center" }}>
        <div className="cube-container">
          <div className="cube">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p>This may take a moment</p>
      </div>
    </div>
  );
}
