import React, { useEffect, useState } from "react";
import axios from "axios";

function MyDetails() {
  const [user, setUser] = useState({});
  const email = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get(`https://welcome-backend-env.eba-aum53iiq.eu-north-1.elasticbeanstalk.com/api/users/${email}`)
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <h2>My Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default MyDetails;
