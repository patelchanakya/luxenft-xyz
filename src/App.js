import "./App.css";
import AudioClip from "./video/cossy.mp3";
import pdf from "./filers/chankyapatel_resume.pdf";

function App() {
  let audio = new Audio(AudioClip);
  const start = () => {
    audio.play();
  };

  function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("stayh1").style.color = "white";
    document.getElementById("stayh1").style.opacity = 1;
    document.getElementById("oldh1").textContent = "NOT FOR TOO LONG";

    document.getElementById("oldh1").style.opacity = 0.6;
    document.getElementById("newspan").style.color = "white";
    document.getElementById("mirrorxyztoo").style.display = "none";
    document.getElementById("mirrorxyztoor").style.display = "none";

    document.getElementById("myres").style.display = "none";
    document.getElementById("myres").classList.add("fade-in-text");
    document.getElementById("mirrorxyztoor").classList.add("fade-in-text");
  }

  function off() {
    audio.play();
    document.getElementById("overlay").style.display = "none";
    document.getElementById("stayh1").style.display = "none";
    document.getElementById("oldh1").style.display = "none";
    document.getElementById("newh1").style.display = "block";
    document.getElementById("newh4").style.display = "block";
    document.getElementById("mirrorxyztoor").style.display = "block";
    document.getElementById("newspan").style.textDecoration = "none";
    document.getElementById("newh11").style.display = "block";
    document.getElementById("mirrorxyz").style.display = "block";
    document.getElementById("mirrorxyztoo").style.display = "block";

    document.getElementById("myres").style.display = "block";
  }

  return (
    <div className="App">
      <div className="container">
        {/* <div id="darkmane" className="darkbox" onClick={start} /> */}
        <h1
          className="mainheader"
          id="oldh1"
          style={{
            // position: "absolute",
            zIndex: 1,
            borderStyle: "dashed",
            borderWidth: "5px",
            borderColor: "crimson",
            position: "relative",
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
        <div className="moving-background"></div>
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
        {/* <div></div> */}
        <h4
          class="fade-in-text"
          id="mirrorxyz"
          style={{
            zIndex: 10,
            position: "fixed",
            display: "none",
            color: "wheat",
            marginTop: "170px",
            fontSize: "small",
            fontWeight: "lighter",
          }}
        >
          stay tuned
        </h4>

        <a
          class="fade-in-text"
          id="mirrorxyztoo"
          href={"https://mirror.xyz/chanak.eth"}
          style={{
            zIndex: 10,
            position: "fixed",
            display: "none",
            color: "wheat",
            marginTop: "185px",
          }}
        >
          https://mirror.xyz/chanak.eth
        </a>
        <h4
          id="mirrorxyztoor"
          style={{
            zIndex: 10,
            position: "fixed",
            display: "block",
            color: "wheat",
            marginTop: "275px",
            fontSize: "small",
            fontWeight: "lighter",
          }}
        >
          about me
        </h4>
        <a
          className="wiggleme"
          href={pdf}
          id="myres"
          download="chanakya_resume"
          style={{
            zIndex: 10,
            position: "fixed",
            display: "block",
            color: "wheat",
            marginTop: "290px",
          }}
        >
          my resume
        </a>
        <a
          className="wiggleme"
          href="https://www.youtube.com/watch?v=FFOTojECeWc"
          id="myres"
          style={{
            zIndex: 10,
            position: "fixed",
            display: "block",
            color: "wheat",
            marginTop: "325px",
          }}
        >
          my youtube
        </a>

        <h1
          id="newh11"
          style={{
            display: "none",
            position: "fixed",
            zIndex: 11,
            marginTop: "633px",
            marginLeft: "475px",
            fontFamily: "times",
            fontSize: "medium",
            opacity: 0.4,
            width: "100%",
            color: "crimson",
            textDecoration: "underline",
            textDecorationColor: "white",
            textDecorationThickness: "40%",
            textDecorationStyle: "double",
          }}
        >
          project c o m i n g s o o n
        </h1>
        <span
          id="newspan"
          style={{
            fontFamily: "times",
            fontSize: "medium",
            position: "fixed",
            width: "100%",
            zIndex: 11,
            marginTop: "650px",
            marginLeft: "612px",
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
