import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { useNavigation } from "../../hooks/useNavigation.js";
import { useState } from "react";

export default function DocsLayout() {
  const { isSidebarOpen, setIsSidebarOpen } = useNavigation();

  const [isSideBarMobileOpen, setIsSideBarMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header onMobileMenuClick={() => setIsSideBarMobileOpen((v) => !v)} />

      <Sidebar
        onSectionChange={() => setIsSidebarOpen(false)}
        mobile={true}
        open={isSideBarMobileOpen}
        onClose={() => setIsSideBarMobileOpen(false)}
        side="right"
        widthClass="w-80 max-w-[85%]"
      />

      <div className="flex flex-1 min-h-0 flex-col lg:flex-row">
        {isSidebarOpen && (
          <div className="w-full lg:hidden border-b">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        )}

        <aside className="hidden lg:block w-80 shrink-0 sticky top-16 self-start bg-gradient-to-b from-white/60 to-white/20 border-r border-gray-200">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Sidebar onSectionChange={() => setIsSidebarOpen(false)} />
          </div>
        </aside>

        <main className="flex-1 min-w-0 min-h-0 px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
