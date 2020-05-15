import React from "react";
import profilePhoto from "../assets/robin.jpg";

function ProfilePage() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col text-center">
            <img
              className="shadow"
              style={{ maxHeight: "300px", borderRadius: "5%" }}
              src={profilePhoto}
              alt="robin.jpg"
            />
          </div>
          <div className="col ">
            <div clasName="row">
              <h1>ABOUT ME</h1>
              <h6>
                Pmp Certified Project Manager in IT SDLC with 5+ years and 10+
                apps managed from initiation to closing. Full Stack Javascript
                Developer, Yellow Belt Six Sigma Practitioner, Love sharing
                Strategy & Creative Ideas.
              </h6>
            </div>

            <div clasName="row">
              <h1>MY QUOTE</h1>
              <h6 className="font-italic">
                "Every problem has a unique solution. Creativity and
                Perseverance will guide you through it.""
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
