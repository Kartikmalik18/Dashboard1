import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({ email: true, sms: false });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleNotificationChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  return (
    <div className={`settings-page ${theme}`}>
      <h1>Settings</h1>
      <button onClick={toggleTheme}>
        Toggle Theme (Current: {theme})
      </button>
      <div>
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={notifications.email}
            onChange={handleNotificationChange}
          />
          Email
        </label>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={notifications.sms}
            onChange={handleNotificationChange}
          />
          SMS
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
