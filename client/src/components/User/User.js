import React, { useEffect, useState } from "react";
import TableUser from "./TableUser";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8081/api/v1/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => setUsers(data.users));
    }
    fetchData();
  }, []);

  return (
    <div>
      user
      <TableUser user={users} />
    </div>
  );
};

export default User;
