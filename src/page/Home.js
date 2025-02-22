import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="stars"></div>
      <div class="container d-flex justify-content-center">
        <div class="container-box">
          <div class="header">What would you like to do?</div>
          <div class="row mt-4">
            <div class="col-md-4">
              <div class="option-card" onClick={() => navigate("/python")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1822/1822899.png"
                  alt="Python Coding"
                />
                <h5>Python Coding</h5>
                <p>Code with text-based coding in Python.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="option-card" onClick={() => navigate("/javascript")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1822/1822923.png"
                  alt="JavaScript Coding"
                />
                <h5>JavaScript Coding</h5>
                <p>Code interactive web applications.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div onClick={() => navigate("/scratch")} class="option-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1822/1822911.png"
                  alt="Block Coding"
                />
                <h5>Block/Scratch Coding</h5>
                <p>Code for games , video.</p>
              </div>
            </div>
            {/* <div class="col-md-4">
              <div class="option-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1822/1822911.png"
                  alt="Arduino Coding"
                />
                <h5>Arduino Coding</h5>
                <p>Code for hardware and embedded systems.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
