import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import cactuar from "../assets/cactuar.png";
// import ReactContactForm from "react-mail-form";

function ContactPage() {
  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <a
          href="https://www.linkedin.com/in/robin-salim/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <img
            src={linkedin}
            alt="linkedin.png"
            style={{ maxWidth: "50px", aspectRatio: 1 }}
          />
        </a>
        <a
          href="https://github.com/linnrobin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <img
            src={github}
            alt="github.png"
            style={{ maxWidth: "50px", aspectRatio: 1 }}
          />
        </a>
        <a
          href="https://wa.me/6285101888201"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <img
            src={whatsapp}
            alt="whatsapp.png"
            style={{ maxWidth: "50px", aspectRatio: 1 }}
          />
        </a>
        {/* <a href="#0" className="p-2">
          <img
            src={cactuar}
            alt="cactuar.png"
            style={{ maxWidth: "40px", aspectRatio: 1 }}
            data-toggle="modal"
            data-target="#staticBackdrop"
          />
        </a> */}
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Leave me a message!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {/* <ReactContactForm to="robinsalim@yahoo.com" /> */}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
