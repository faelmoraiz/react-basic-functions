import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Headers() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/counter">
          <p>Contador</p>
        </Link>
        <Link to="/todos">
          <p>Tarefas</p>
        </Link>
        <Link to="/text">
          <p>Editor de texto</p>
        </Link>
      </div>
    </header>
  );
}
