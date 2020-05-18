import React from "react";

function ExperiencePage() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0 text-center">
            <button
              className="btn btn-primary btn-block text-uppercase font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Project Manager
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div
            className="card-body bg-dark font-weight-bold"
            style={{ color: "white" }}
          >
            <ul className="list-unstyled">
              <li>NESIAGAME (PT. Informasi Guna Optima)</li>
              <li>JAN 2015 - JAN 2020</li>
              <li>5 years 1 month</li>
              <li>Medan - North Sumatera - Indonesia</li>
            </ul>
          </div>
          <div className="card-body">
            A growing start-up in a fast-paced, agile environment SDLC. My
            experiences and responsibilities are :
            <li>
              Finished 10 project (some are games, applications, framework, and
              systems)
            </li>
            <li>
              Team Building to encourage coworker always give full involvement
              in project
            </li>
            <li>
              Collaborate with coworker to make sure that a project can be
              delivered on time and on budget
            </li>
            <li>
              Risk analysis and management on a decision meeting with
              stakeholder
            </li>
            <li>C-Level communications management</li>
            <li>
              Business analysis for the projects and products made for client
            </li>
            <li>Meet and follow up clients for UDT / UAT</li>
            <li>Client retention management</li>
            <li>Budget , time, quality analysis for client requirement</li>
            <li>Annual progress and financial Report</li>
            <li>Scout and headhunt prospective new talents </li>
            <li>Maintain the office's clean and green environment concept</li>
            <li>
              Integration of JIRA / TRELLO / FREEDCAMP / GOOGLE APPS to
              reporting, bug-tracking, sharing, and coworking
            </li>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-success btn-block text-uppercase font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Store Manager
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div
            className="card-body bg-dark font-weight-bold"
            style={{ color: "white" }}
          >
            <ul className="list-unstyled">
              <li>Shinra-Tech</li>
              <li>JUN 2012 - DEC 2014</li>
              <li>2 years 7 months</li>
              <li>Medan - North Sumatera - Indonesia</li>
            </ul>
          </div>
          <div className="card-body">
            Great experience in handling a IT Computer store. Some key
            responsibilities are :
            <li>
              Sell in-stock and not-in-stock-but-will-be-available-once-you-pay
              products to client
            </li>
            <li>Purchase products from supplier</li>
            <li>Analyze stock plan for better marketing efficiency</li>
            <li>Maintain relationship with high valued customer</li>
            <li>Make financial report</li>
            <li>Stock checking</li>
            <li>Handle all certified test for the store from suppliers</li>
            <li>Attend seminars and meetings of product knowledge</li>
            <li>
              Train coworker to basic product selling, hardware and networking
              maintenance
            </li>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-warning btn-block text-uppercase font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Server Administrator (Intern)
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div
            className="card-body bg-dark font-weight-bold"
            style={{ color: "white" }}
          >
            <ul className="list-unstyled">
              <li>Sparkstation</li>
              <li>JAN 2012 - APR 2012</li>
              <li>4 months</li>
              <li>Singapore</li>
            </ul>
          </div>
          <div className="card-body">
            Singapore, South East Asia's most developed country in my
            experience. My experience there was great although it doesn't last
            long. Some key responsibilities were :
            <li>Handle tickets from and to client</li>
            <li>Installation and settings of servers (linux and windows)</li>
            <li>Setting KVM per client requests</li>
            <li>A lot of Wiring and Cabling management</li>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <button
              className="btn btn-secondary btn-block text-uppercase font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Sales Supervisor
            </button>
          </h2>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordionExample"
        >
          <div
            className="card-body bg-dark font-weight-bold"
            style={{ color: "white" }}
          >
            <ul className="list-unstyled">
              <li>Combat Zone</li>
              <li>MAY 2010 - DEC 2011</li>
              <li>1 years 8 months</li>
              <li>Singapore</li>
            </ul>
          </div>
          <div className="card-body">
            Combat zone is a sport activity center that also have retails for
            their equipment. Working there makes my body fit. So here are some
            of my past responsibilities :
            <li>Cater to client requests in the activity center</li>
            <li>Schedule a usage time for client booking</li>
            <li>
              Maintain the facility to be in perfect condition by supervising
              the contracted cleaners
            </li>
            <li>Maintain all the tools used in the facility</li>
            <li>Sell equipment for clients</li>
            <li>Purchase equipment from supplier</li>
            <li>Make daily activity report</li>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFive">
          <h2 className="mb-0">
            <button
              className="btn btn-danger btn-block text-uppercase font-weight-bold"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Freelance Web & Flash Developer
            </button>
          </h2>
        </div>
        <div
          id="collapseFive"
          className="collapse"
          aria-labelledby="headingFive"
          data-parent="#accordionExample"
        >
          <div
            className="card-body bg-dark font-weight-bold"
            style={{ color: "white" }}
          >
            <ul className="list-unstyled">
              <li>Freelance</li>
              <li>MAY 2007 - DEC 2011</li>
              <li>4 years 8 months</li>
              <li>Taiwan - Medan</li>
            </ul>
          </div>
          <div className="card-body">
            <li>
              My first experience in talking with clients and deducing what they
              want
            </li>
            <li>My first earning from clients</li>
            <li>Mostly a one time gig</li>
            <br />
            Some of the results made are :<li>CSS Template</li>
            <li>Wordpress Websites</li>
            <li>Drupal Websites and Blog</li>
            <li>Joomla Websites and Blog</li>
            <li>Flash game</li>
            <li>Flash Company Profile</li>
            <li>HTML Company Profile</li>
            <li>Java games</li>
            <li>Java program</li>
            <br />
            Mostly use PHP and MySQL, but some uses .NET and Microsoft SQL
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
