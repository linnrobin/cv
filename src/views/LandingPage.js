import React from "react";

function LandingPage() {
  return (
    <>
      <div className="row bg-dark">
        <div className="col border">
          <img
            style={{ width: "300px", padding: 10 }}
            src={"../assets/background.jpg"}
            alt="robin.jpg"
          />
        </div>{" "}
        <div className="col">
          <h1 style={{ color: "white" }}>This is LandingPage</h1>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
