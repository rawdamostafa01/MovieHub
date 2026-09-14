import { Link, useNavigate } from "react-router";
import "./Loginforme.css";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Loginforme() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handelSupmit(e) {
    e.preventDefault();
    const value = {
      email,
      password,
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
      if (data.message === "success") {
        toast.success("Account created successfully");
        setTimeout(() => {
          navigate("/");
        });
      } else {
        toast.error(data.message || "Signup failed, please try again");
      }
    } catch (error) {
      toast.error("Network error, please check your connection and try again");
    }
  }
  return (
    <main className="login-page">
      <section className="login-shell" aria-labelledby="login-title">
        <div className="login-showcase">
          <span className="login-label">
            <i className="bi bi-film" aria-hidden="true" /> MOVI MEMBERS
          </span>
          <h1>Welcome back to the movies.</h1>
          <p>
            Pick up where you left off and find something worth watching
            tonight.
          </p>
          <div className="login-icons" aria-hidden="true">
            <i className="bi bi-camera-reels" />
            <i className="bi bi-ticket-perforated" />
            <i className="bi bi-play-circle" />
          </div>
        </div>

        <div className="login-form-area">
          <div className="login-heading">
            <h2 id="login-title">Log in</h2>
            <p>Enter your details to continue.</p>
          </div>

          <form onSubmit={handelSupmit} className="login-form">
            <div className="login-field">
              <label className="form-label" htmlFor="loginName">
                Email address
              </label>
              <div className="login-input-wrap">
                <i className="bi bi-envelope" aria-hidden="true" />
                <input
                  className="form-control login-input"
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

            <div className="login-field">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <div className="login-input-wrap">
                <i className="bi bi-lock" aria-hidden="true" />
                <input
                  className="form-control login-input"
                  id="loginPassword"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="btn btn-warning login-button" type="submit">
              Log in <i className="bi bi-arrow-right" aria-hidden="true" />
            </button>
          </form>

          <p className="login-footer">
            New to movi? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
