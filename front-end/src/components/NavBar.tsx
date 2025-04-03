import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";
import logo from '../assets/images/logo.svg';
import CurrencySelector from "./CurrencySelector";

const NavBar = () => {
    return (
        <nav className="navbar-container flex items-center justify-between px-6 py-3 shadow">
            <div className="flex items-center space-x-6">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="MenuFinder" className="navbar-logo" />
                </Link>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-700 hover:text-gray-900">
                        Accueil
                    </Link>
                    <Link to="/restaurants" className="text-gray-700 hover:text-gray-900">
                        Restaurants
                    </Link>
                    <Link to="/menus" className="text-gray-700 hover:text-gray-900">
                        Menus
                    </Link>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <CurrencySelector />
                <Link
                    to="/login"
                    className="btn-primary text-white py-2 px-4 rounded transition-colors"
                >
                    Connexion
                </Link>
                <Link
                    to="/register"
                    className="btn-outline py-2 px-4 rounded border transition-colors"
                >
                    S'inscrire
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
