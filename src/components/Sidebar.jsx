// Sidebar.js
import React from "react";
import { HomeIcon, ChartBarIcon, CogIcon } from "@heroicons/react/outline";

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 py-4 px-8">
      <div className="text-lg font-semibold pb-6 border-b border-gray-700">
        TrackU Menu
      </div>
      <ul className="mt-6 space-y-4">
        <li className="hover:bg-gray-700 p-3 rounded cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
          <HomeIcon className="inline-block w-5 h-5 mr-2" />
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-3 rounded cursor-pointer" onClick={() => setCurrentPage('expenses')}>
          <ChartBarIcon className="inline-block w-5 h-5 mr-2" />
          Expenses
        </li>
        <li className="hover:bg-gray-700 p-3 rounded cursor-pointer" onClick={() => setCurrentPage('futureExpenses')}>
          <CogIcon className="inline-block w-5 h-5 mr-2" />
          Future Expenses
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
