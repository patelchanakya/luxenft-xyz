import "./App.css";
import BackgroundClip from "./video/mainbackground.mp4";
import AudioClip from "./video/cossy.mp3";
import { Howl } from "react-howler";
import { useEffect, useState } from "react";

function App() {
  // const audioTune = new Audio("./video/mainbackground.mp3");
  // const [playInLoop, setPlayInLoop] = useState(false);
  // useEffect(() => {
  //   audioTune.load();
  // }, []);
  // useEffect(() => {
  //   audioTune.loop = playInLoop;
  // }, [playInLoop]);
  // const playSound = () => {
  //   audioTune.play();
  // };

  // // pause audio sound
  // const pauseSound = () => {
  //   audioTune.pause();
  // };

  // // stop audio sound
  // const stopSound = () => {
  //   audioTune.pause();
  //   audioTune.currentTime = 0;
  // };
  let audio = new Audio(AudioClip);
  const start = () => {
    var x = document.getElementById("darkmane");
    audio.play();
    audio.loop(true);
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  };

  function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("stayh1").style.color = "white";
    document.getElementById("stayh1").style.opacity = 1;
    document.getElementById("oldh1").style.opacity = 0.1;
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("stayh1").style.display = "none";
    document.getElementById("oldh1").style.display = "none";
    document.getElementById("newh1").style.display = "block";
    document.getElementById("newh4").style.display = "block";
    audio.play();
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
      </div>
    </div>
  );
}

export default App;
