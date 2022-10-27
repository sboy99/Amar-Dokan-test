import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLayout } from "../app/store";
import { Navbar, Sidebar, Menu } from "../components/adminPage";

const AdminPage = () => {
  // const { isSidebarOpen } = useAdmin();
  const { width } = useLayout();
  const [renderSidebar, setRenderSidebar] = useState(false);

  useEffect(() => {
    width > 1280 ? setRenderSidebar(false) : setRenderSidebar(true);
  }, [width]);

  return (
    <section className="z-0 min-h-screen bg-slate-100">
      {/* sidebar */}
      {renderSidebar && <Sidebar />}
      <main className="flex h-full flex-auto flex-shrink-0 flex-col">
        {/* navbar */}
        <div className="sticky inset-0 z-10 h-16 flex-shrink-0 border-b border-slate-900/10 bg-white">
          <Navbar />
        </div>
        {/* body */}
        <div className="from-pink-00 pointer-events-none fixed inset-x-0 top-16 min-h-64 w-full bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600"></div>
        <div className="container relative mx-auto h-full xl:flex ">
          {/* Menu for large screens */}
          {!renderSidebar && (
            <div className="sticky inset-0 top-16 h-[calc(100vh-4rem)] w-full max-w-xs flex-shrink-0 bg-white">
              <div className="relative h-full">
                {/* upper fade */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 w-full bg-gradient-to-b from-white via-white to-transparent"></div>
                {/* menu */}
                <Menu />
                {/* lower fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 w-full bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
          )}
          {/* outlet */}
          <div className="flex-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminPage;
