import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components/adminPage";

const AdminPage = () => {
  return (
    <section className="flex h-screen items-center overflow-hidden bg-slate-300">
      {/* sidebar */}
      <div className="h-full w-72 bg-white">
        <Sidebar />
      </div>
      {/* main */}
      <main className="flex h-full flex-auto flex-col">
        {/* navbar */}
        <div className="h-16 flex-shrink-0 bg-slate-100">
          <Navbar />
        </div>
        {/* outlet */}
        <div className="overflow-auto">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default AdminPage;