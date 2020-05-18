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
        <main className="container overflow-auto" style={{ height: "70vh" }}>
          <Routes />
        </main>
        <footer
          className="footer mt-auto py-3  fixed-bottom"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "inset 0px 10px 10px -3px rgba(50, 50, 50, 0.75)",
            minHeight: "20vh",
          }}
        >
          <div className="container">
            <span style={{ color: "black" }}>
              <ReactTypingEffect
                text={[
                  "您好！我姓林，大家叫我ROBIN。看完後我的網頁，請您留個言然後我們聊聊天吧！！！",
                  "Hi, How are you, my name is Robin, After looking at my profile, don't forget to drop some contact so we can chit-chat about anything!!!",
                  "初めました〜！私わロビンです。私のウェブサイトを見終わった後、メッセージを残してください、そして、雑談しましょう~~~",
                ]}
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
