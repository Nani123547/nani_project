import React from "react";

type Props = {
  children: React.ReactNode;
};

const PortfolioLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black">
        <h1 className="text-xl font-bold text-green-400">Portfolio</h1>

        <nav className="space-x-6 text-sm hidden md:flex">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#skills" className="hover:text-green-400">Skills</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </nav>
      </header>

      {/* Content */}
      <main className="px-6 md:px-16 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-sm text-gray-400">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default PortfolioLayout;