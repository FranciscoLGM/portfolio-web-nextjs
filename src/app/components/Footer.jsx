import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <span>Built with Passion by</span>
          <a
            href="https://github.com/FranciscoLGM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 ml-2 hover:underline"
          >
            FranciscoLGM
          </a>
        </div>
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
