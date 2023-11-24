import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="nav-link">
          Formula
        </Link>
      </header>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
