import React from "react";
import { FaBeer } from "react-icons/fa";

function Index() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}>
      <h2 className="mb-1">Github Profile</h2>
      <h6 className="text-muted">Generate your Github Profile</h6>
      <div className="d-flex gap-2 mt-3">
        <input
          type="text"
          className="search_input rounded-1 p-2 shadow-none "
          placeholder="Github Username"
        />
        <button
          type="button"
          className="custom_button rounded-1 px-5">
          Generate
        </button>
      </div>
    </div>
  );
}

export default Index;
