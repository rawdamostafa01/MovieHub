import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="movi-footer">
      <div className="container">
        <div className="row gy-4 gx-lg-5">
          <div className="col-lg-5">
            <Link className="movi-footer-brand" to="/">
              <i className="bi bi-film" aria-hidden="true" /> Movie
            </Link>
            <p className="movi-footer-description">
              Your home for memorable stories, new discoveries, and everything
              worth watching next.
            </p>
            <div className="movi-footer-socials" aria-label="Social media links">
              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a href="#youtube" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a href="#x" aria-label="X">
                <i className="bi bi-twitter-x" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h2 className="movi-footer-title">Explore</h2>
            <ul className="movi-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/people">People</Link></li>
              <li><Link to="/tv">TV shows</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h2 className="movi-footer-title">Account</h2>
            <ul className="movi-footer-links">
              <li><Link to="/login">Log in</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><a href="#watchlist">Watchlist</a></li>
              <li><a href="#favorites">Favorites</a></li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h2 className="movi-footer-title">Stay in the loop</h2>
            <p className="movi-footer-note">Get the latest picks in your inbox.</p>
            <a className="btn btn-warning movi-footer-button" href="mailto:hello@movi.example">
              Contact us <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="movi-footer-bottom">
          <span>&copy; 2026 Movie. All rights reserved.</span>
          <div className="movi-footer-legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
