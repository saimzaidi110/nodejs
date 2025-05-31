import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
      <ul className="space-y-4">
        <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
        <li><a href="#" className="hover:text-gray-300">Profile</a></li>
        <li><a href="#" className="hover:text-gray-300">Settings</a></li>
        <li><a href="#" className="hover:text-gray-300">Help</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
