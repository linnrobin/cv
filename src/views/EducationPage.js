import React from "react";
import fju from "../assets/fju.jpg";
import hacktiv8 from "../assets/hacktiv8.jpg";

function EducationPage() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" style={{ textShadow: "2px 2px black" }}>
          <div className="carousel-item active justify-content-center">
            <img
              src={fju}
              className="d-block"
              alt="fju.jpg"
              style={{ height: "70vh", margin: "auto", bottom: 0 }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h5>FU JEN CATHOLIC UNIVERSITY</h5>
              <h6>TAIPEI, TAIWAN 2006 – 2010</h6>
              <h5>BACHELOR OF SCIENCE</h5>
              <h6>Major in Computer Science</h6>
              <h6>Minor Japanese Language and Literature</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={hacktiv8}
              className="d-block"
              alt="hacktiv8.jpg"
              style={{ height: "70vh", margin: "auto", bottom: 0 }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h5>HACKTIV8</h5>
              <h6>JAKARTA, Feb 2020 – June 2020</h6>
              <h5>FULL STACK JAVASCRIPT DEVELOPER</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default EducationPage;
