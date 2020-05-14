import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div
        className="container-fluid p-0"
        style={{
          height: "100vh",
          backgroundImage: `url(${require("./assets/background.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header>
          <Navigation />
        </header>
        <main className="container">
          <Routes />
        </main>
        <footer
          className="footer mt-auto py-3  fixed-bottom"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "inset 0px 10px 10px -3px rgba(50, 50, 50, 0.75)",
            minHeight: "20%",
          }}
        >
          <div className="container">
            <span style={{ color: "black" }}>
              <ReactTypingEffect
                text={["Place sticky footer content here.", "hello", "world"]}
                speed={50}
                eraseDelay={3000}
                typingDelay={1000}
              />
            </span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
