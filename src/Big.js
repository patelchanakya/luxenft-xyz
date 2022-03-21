import BackgroundClip from "./video/mainbackground.mp4";

function Big() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        playsinline
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -10000,
        }}
      >
        <source src={BackgroundClip} type="video/mp4" />
      </video>
      ;
    </div>
  );
}

export default Big;
