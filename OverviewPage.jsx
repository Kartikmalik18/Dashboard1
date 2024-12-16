import React from "react";
import "./OverviewPage.css";

function OverviewPage() {
  return (
    <div className="dashboard">
      <div className="left-panel">
        <div className="profile-card">
          <img src="profile.jpg" alt="profile" className="profile-img" />
          <h2>John Antony</h2>
          <p>"IT Specialist"</p>
          <div className="stats">
            <div>8.2<br />Overall Rating</div>
            <div>75%<br />Completed Projects</div>
            <div>10<br />Proficient Skills</div>
          </div>
        </div>

        <div className="deadline">
          <h3>Deadline</h3>
          <div>
            <p>AI/ML <span>4 Days Left</span></p>
            <p>UI/UX <span>2 Days Left</span></p>
          </div>
        </div>

        <div className="skill-set">
          <h3>Skill Set</h3>
          <ul>
            <li>Java <span>75%</span></li>
            <li>C++ <span>60%</span></li>
            <li>Python <span>80%</span></li>
          </ul>
        </div>
      </div>

      <div className="main-panel">
        <div className="upcoming-courses">
          <h3>Upcoming Courses</h3>
        </div>

        <div className="courses">
          <div>
            <h4>Cyber Security</h4>
            <p>62%</p>
          </div>
          <div>
            <h4>UX Research</h4>
            <p>20%</p>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <h3>Activities</h3>
        <ul>
          <li>Adriana posted cloud system security</li>
          <li>Peter posted cloud system security</li>
        </ul>
      </div>
    </div>
  );
}

export default OverviewPage;
