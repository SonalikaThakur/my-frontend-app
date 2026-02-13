import React, { useEffect, useState } from "react";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://welcome-backend-env.eba-aum53iiq.eu-north-1.elasticbeanstalk.com/api/users/all")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
