import React from 'react'

import Navbar from "../components/Navbar";

const WebLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-8">
        {children}
      </main>
      <footer className="bg-slate-900 px-5 py-5 text-center text-sm text-slate-300">
        EmployeeHub — React Practical Project
      </footer>
    </div>
  );
};

export default WebLayout;

