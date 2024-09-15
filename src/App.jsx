// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import FutureExpenses from "./pages/FutureExpenses";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "expenses":
        return <Expenses />;
      case "futureExpenses":
        return <FutureExpenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar setCurrentPage={setCurrentPage} />
        <main className="flex-1 p-8 bg-gray-100">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
