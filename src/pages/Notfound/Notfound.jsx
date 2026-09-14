import { Link } from "react-router";
import Navbar from "../../componant/Navbar/Navbar";
import Footer from "../../componant/Footer/Footer";
import "./Notfound.css";

export default function Notfound() {
  return (
    <>
      <Navbar />
      <main className="notfound-page">
        <div className="notfound-content">
          <div className="notfound-reel" aria-hidden="true">
            <i className="bi bi-film" />
          </div>
          <p className="notfound-code">404</p>
          <h1>Scene not found.</h1>
          <p className="notfound-message">
            This page seems to have left the theater. Let&apos;s get you back to
            the movies.
          </p>
          <Link className="btn btn-warning notfound-button" to="/">
            <i className="bi bi-house-door" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
