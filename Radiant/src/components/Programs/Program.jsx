import React from "react";
import "./Program.css";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <div className="program-content">
          <h1>Teaching Profession</h1>
          <button className="btn"> View Course</button>
          <p>
            This course is designed to familiarize students with the methods and
            history of teaching{" "}
          </p>
        </div>
      </div>
      <div className="program">
        <h1>Programming Using C</h1>
        <button className="btn"> View Course</button>
        <p>This course helps students to learn the C programming</p>
      </div>
      <div className="program">
        <h1>MCC</h1>
        <button className="btn"> View Course</button>
        <p> This course covers the Mathematical Concepts for Computing </p>
      </div>
      <div className="program">
        <h1>Information System</h1>
        <button className="btn"> View Course</button>
        <p>
          This course introduces fundamental concepts fo Information System and
          Database
        </p>
      </div>
      <div className="program">
        <h1>Software Development</h1>
        <button className="btn"> View Course</button>
        <p>
          This course contains SDLC process along with web and shell scripting
        </p>
      </div>
      <div className="program">
        <h1>ISP</h1>
        <button className="btn"> View Course</button>
        <p>
          This course helps to understands the professional issues in IS
          Practices
        </p>
      </div>
      <div className="program">
        <h1>PMTI</h1>
        <button className="btn"> View Course</button>
        <p>
          This course helps to understands the Principles and Methods of
          Technical Instruction
        </p>
      </div>
    </div>
  );
};

export default Program;
