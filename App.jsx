import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/sidebar";
import OverviewPage from "./pages/OverviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LogInPage from "./pages/LogIn";

import "./App.css";
import "./Components/sidebar.css";
import "./Components/Header.css";
import "./pages/OverviewPage.css";


function App() {
  return (
    <Router>
      <div className="app">
        {/* Header Component */}
        <Header />
        <div className="app-body">
          {/* Sidebar Component */}
          <Sidebar />
          {/* Main Content */}
          <main className="content">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/login" element={<LogInPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
