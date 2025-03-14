import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Style de navigation selon la page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <nav className={`${isAuthPage ? 'absolute top-0 left-0 right-0 z-10 bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className={`${isAuthPage ? 'text-white' : 'text-primary'} font-bold text-xl`}>
                MenuFinder
              </Link>
            </div>
            {!isAuthPage && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className={`${location.pathname === '/' ? 'border-primary text-primary' : 'border-transparent text-dark/70 hover:text-dark'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Accueil
                </Link>
                <Link to="/restaurants" className={`${location.pathname === '/restaurants' ? 'border-primary text-primary' : 'border-transparent text-dark/70 hover:text-dark'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Restaurants
                </Link>
                <Link to="/menus" className={`${location.pathname === '/menus' ? 'border-primary text-primary' : 'border-transparent text-dark/70 hover:text-dark'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Menus
                </Link>
              </div>
            )}
          </div>
          {!isAuthPage && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link to="/login" className="px-4 py-2 mr-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                Connexion
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                S'inscrire
              </Link>
            </div>
          )}
          {!isAuthPage && (
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-dark/70 hover:text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {!isAuthPage && (
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${location.pathname === '/' ? 'bg-primary/10 border-primary text-primary' : 'border-transparent text-dark/70 hover:bg-gray-50 hover:border-gray-300 hover:text-dark'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/restaurants"
              className={`${location.pathname === '/restaurants' ? 'bg-primary/10 border-primary text-primary' : 'border-transparent text-dark/70 hover:bg-gray-50 hover:border-gray-300 hover:text-dark'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              to="/menus"
              className={`${location.pathname === '/menus' ? 'bg-primary/10 border-primary text-primary' : 'border-transparent text-dark/70 hover:bg-gray-50 hover:border-gray-300 hover:text-dark'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Menus
            </Link>
            <Link
              to="/login"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-primary hover:bg-gray-50 hover:border-gray-300 hover:text-primary-dark font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-primary hover:bg-gray-50 hover:border-gray-300 hover:text-primary-dark font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
