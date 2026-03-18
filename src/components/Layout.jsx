import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children, showSidebar = true }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans transition-colors flex flex-col">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex overflow-hidden">
        {showSidebar && (
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        )}
        
        <main className="flex-1 overflow-y-auto bg-gray-900 transition-colors p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
