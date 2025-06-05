import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  const HandleLogout = () =>{
    localStorage.removeItem("user")
    navigate('/login')
  }
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={HandleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
