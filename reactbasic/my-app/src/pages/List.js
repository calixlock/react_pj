import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { name: "kim", email: "kim@gmail.com" },
    { name: "na", email: "na@gmail.com" },
    { name: "park", email: "park@gmail.com" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <User userData={u} />
        ))}
      </tbody>
    </table>
  );
};
export default UserList;
