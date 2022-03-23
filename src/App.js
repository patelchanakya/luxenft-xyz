import "./App.css";
import BackgroundClip from "./video/mainbackground.mp4";
import AudioClip from "./video/cossy.mp3";

function App() {
  let audio = new Audio(AudioClip);
  const start = () => {
    audio.play();
  };

  function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("stayh1").style.color = "white";
    document.getElementById("stayh1").style.opacity = 1;
    document.getElementById("oldh1").style.opacity = 0.1;
    document.getElementById("newspan").style.color = "white";
  }

  function off() {
    audio.play();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("stayh1").style.display = "none";
    document.getElementById("oldh1").style.display = "none";
    document.getElementById("newh1").style.display = "block";
    document.getElementById("newh4").style.display = "block";
    document.getElementById("newspan").style.textDecoration = "none";
    document.getElementById("newh11").style.display = "block";
  }

  return (
    <div className="App">
      <div className="container">
        {/* <div id="darkmane" className="darkbox" onClick={start} /> */}

        <h1
          id="oldh1"
          style={{
            zIndex: 1,
            borderStyle: "dashed",
            borderWidth: "5px",
            borderColor: "red",
          }}
          onClick={on}
        >
          ENTER QUIETLY
        </h1>

        <h3
          id="newh1"
          style={{
            display: "none",
            zIndex: 4,
            fontSize: "2rem",
            marginLeft: "4rem",
          }}
        >
          LUXE
        </h3>
        <h3 id="newh1" style={{ display: "none", zIndex: 4, fontSize: "2rem" }}>
          A NFT EXPERIENCE
        </h3>
        <h1
          id="stayh1"
          style={{
            zIndex: 3,
            marginLeft: "5%",
            opacity: 0.01,
          }}
        >
          STAY FOREVER
        </h1>
        {/* <span style={{ zIndex: 1 }}>STAY FOR GOOD</span> */}
        <div id="overlay" onClick={off}>
          <div id="text">
            <h3>LUXE</h3>
            <div>
              <h3>LUXE</h3>
              <br />
              <h3>LUXE</h3>
            </div>
            <h3>LUXE</h3>
          </div>
        </div>
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
            // zIndex: ,
          }}
        >
          <source src={BackgroundClip} type="video/mp4" />
        </video>
        <h3>LUXE</h3>
        <div onClick={start}>
          <h3>LUXE</h3>
          <br />
          <h6>stay forever</h6>
        </div>
        <h3>LUXE</h3>
        <h4
          id="newh4"
          style={{
            zIndex: 10,
            position: "fixed",
            display: "none",
            marginLeft: "49.5px",
          }}
        >
          NFT EXPERIENCE
        </h4>
        {/* <h1
          style={{
            zIndex: 11,
            marginTop: "847px",
            marginLeft: "500px",
            fontSize: "1rem",
            position: "fixed",
          }}
        >
          @chanakyeah
        </h1> */}
        <h1
          id="newh11"
          style={{
            display: "none",
            position: "fixed",
            zIndex: 11,
            marginTop: "847px",
            marginLeft: "500px",
            fontFamily: "times",
            fontSize: "medium",
            opacity: 0.3,
            width: "100%",
            color: "red",
            textDecoration: "underline",
            textDecorationColor: "white",
            textDecorationThickness: "40%",
            textDecorationStyle: "double",
          }}
        >
          c o m i n g s o o n
        </h1>
        <span
          id="newspan"
          style={{
            fontFamily: "times",
            fontSize: "medium",
            position: "fixed",
            width: "100%",
            zIndex: 11,
            marginTop: "864px",
            marginLeft: "644px",
            textDecoration: "line-through",
            textDecorationColor: "red",
            textDecorationThickness: "40%",
          }}
        >
          @chanakyeah
        </span>
      </div>
    </div>
  );
}

export default App;
