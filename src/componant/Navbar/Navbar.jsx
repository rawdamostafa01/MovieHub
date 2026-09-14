import { NavLink } from "react-router";
import "./Navbar.css";
const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark movi-navbar">
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <i className="bi bi-film" aria-hidden="true" />
          <span>Movie</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#moviNavbar"
          aria-controls="moviNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="moviNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#trending-menu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trending
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                id="trending-menu"
              >
                <li>
                  <NavLink className="dropdown-item" to="/movies">
                    <i className="bi bi-camera-reels me-2" aria-hidden="true" />
                    Movies
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/people">
                    <i className="bi bi-people me-2" aria-hidden="true" />
                    People
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/tv">
                    <i className="bi bi-tv me-2" aria-hidden="true" />
                    TV
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2">
            <NavLink className="btn btn-outline-light" to="/login">
              Log in
            </NavLink>
            <NavLink className="btn btn-warning" to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
