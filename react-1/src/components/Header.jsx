import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h2>Kantatee Pollasen</h2>
        </div>
        <nav className="nav-menu">
          <NavLink to="/" end>Profile</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/activity">Activity</NavLink>
           <NavLink to="/form">Form</NavLink>
        </nav>
      </div>
    </header>
  );
}