import "./Signupform.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Signupform() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [phone, setPhone] = useState("");

  async function handelSupmit(e) {
    e.preventDefault();
    const value = {
      name,
      email,
      password,
      rePassword,
      phone,
    };
    try {
      const respons = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(value),
        },
      );
      const data = await respons.json();
      if (respons.ok && data.message === "success") {
        toast.success("Account created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        toast.error(data.message || "Signup failed, please try again");
      }
    } catch (error) {
      toast.error("Network error, please check your connection and try again");
    }
  }

  return (
    <>
      <main className="signup-page">
        <section className="signup-shell" aria-labelledby="signup-title">
          <div className="signup-showcase">
            <span className="signup-label">
              <i className="bi bi-film" aria-hidden="true" /> MOVI MEMBERS
            </span>
            <h1 id="signup-title">Every story belongs somewhere.</h1>
            <p>
              Build your watchlist, discover your next favorite, and make movie
              nights feel like an event.
            </p>
            <div className="signup-icons" aria-hidden="true">
              <i className="bi bi-camera-reels" />
              <i className="bi bi-ticket-perforated" />
              <i className="bi bi-play-circle" />
            </div>
          </div>

          <div className="signup-form-area">
            <div className="signup-heading">
              <h2>Create your account</h2>
              <p>Start your movi journey today.</p>
            </div>

            <form onSubmit={handelSupmit} className="signup-form">
              <div className="signup-field">
                <label className="form-label" htmlFor="Name">
                  Your name
                </label>
                <div className="signup-input-wrap">
                  <i className="bi bi-person" aria-hidden="true" />
                  <input
                    className="form-control signup-input"
                    id="Name"
                    name="Name"
                    type="text"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="signup-field">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <div className="signup-input-wrap">
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <input
                    className="form-control signup-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="signup-field">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="signup-input-wrap">
                  <i className="bi bi-lock" aria-hidden="true" />
                  <input
                    className="form-control signup-input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength="8"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="signup-field">
                <label className="form-label" htmlFor="rePassword">
                  re password
                </label>
                <div className="signup-input-wrap">
                  <i className="bi bi-shield-lock" aria-hidden="true" />
                  <input
                    className="form-control signup-input"
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    minLength="8"
                    value={rePassword}
                    onChange={(e) => setrePassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="signup-field">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <div className="signup-input-wrap">
                  <i className="bi bi-phone" aria-hidden="true" />
                  <input
                    className="form-control signup-input"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button className="btn btn-warning signup-button" type="submit">
                Create account{" "}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
            </form>

            <p className="signup-footer">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
