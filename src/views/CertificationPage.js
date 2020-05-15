import React from "react";
import pmi from "../assets/pmi.png";
import scrumstudy from "../assets/scrumstudy.png";
import redhat from "../assets/redhat.png";

function CertificationPage() {
  return (
    <>
      <div className="cardColumns">
        <div
          className="card mb-3 shadow"
          style={{
            maxWidth: "540px",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pmi} className="card-img" alt="pmi.png" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">PMP</h5>
                <h6>Project Management Professional</h6>
                <p className="card-text">Project Management Instititute </p>
                <p className="card-text">
                  <small className="text-muted">MAY 2019</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card mb-3 shadow"
          style={{
            maxWidth: "540px",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={scrumstudy} className="card-img" alt="scrumstudy.png" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">SFC</h5>
                <h6>Scrum Fundamentals Certified</h6>
                <p className="card-text">
                  SCRUMstudy – Accreditation body for scrum and agile{" "}
                </p>
                <p className="card-text">
                  <small className="text-muted">APRIL 2018</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card mb-3 shadow"
          style={{
            maxWidth: "540px",
          }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={redhat} className="card-img" alt="redhat.png" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">RHCSA</h5>
                <h6>Red Hat Certified System Administrator</h6>
                <p className="card-text">Red Hat </p>
                <p className="card-text">
                  <small className="text-muted">JUNE 2016</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CertificationPage;
