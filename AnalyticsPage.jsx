import React, { useEffect, useState } from "react";
import { fetchUserData } from "../utils/api";
import "./AnalyticsPage.css";

const AnalyticsPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetchUserData(); // API call
      setUsers(response);
    }
    getData();
  }, []);

  const handleExport = () => {
    const csvData = users.map(user => `${user.name},${user.email},${user.registrationDate}`).join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.csv";
    link.click();
  };

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleExport}>Export CSV</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsPage;
