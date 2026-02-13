import React from "react";
import { Link } from "react-router-dom";

function MiddlePage() {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/mydetails">My Details</Link>
      <br />
      <Link to="/allusers">All Users</Link>
    </div>
  );
}

export default MiddlePage;
