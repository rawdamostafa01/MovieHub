import Footer from "../../componant/Footer/Footer";
import Navbar from "../../componant/Navbar/Navbar";
import { Link, useParams } from "react-router";
import "./Moviedetails.css";
import { useEffect, useState } from "react";
import Loading from "../../componant/Loading/Loading";

export default function Movidetails() {
  const [moviedetials, setmoviedetials] = useState(null);
  const { id } = useParams();

  async function get_detials() {
    const respons = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7f5a8badc2ac14840fdeea550286a877`,
    );
    const data = await respons.json();
    setmoviedetials(data);
  }
  useEffect(() => {
    get_detials();
  }, []);
  return (
    <>
      <Navbar />
      {moviedetials !== null ? (
        <main className="movie-details">
          <section className="movie-details-hero">
            <img
              className="movie-details-backdrop"
              src={`https://image.tmdb.org/t/p/original/${moviedetials.backdrop_path}`}
              alt=""
              aria-hidden="true"
            />
            <div className="movie-details-backdrop-shade" />

            <div className="container movie-details-content">
              <Link className="movie-details-back-link" to="/">
                <i className="bi bi-arrow-left" aria-hidden="true" /> Back to
                movies
              </Link>

              <div className="row align-items-end g-4 movie-details-main">
                <div className="col-md-4 col-lg-3">
                  <img
                    className="movie-details-poster"
                    src={`https://image.tmdb.org/t/p/w500/${moviedetials.poster_path}`}
                    alt=" movie poster"
                  />
                </div>

                <div className="col-md-8 col-lg-9">
                  <span className="movie-details-kicker">
                    {moviedetials.genres
                      ?.map((genre) => genre.name)
                      .join(" · ")}{" "}
                    · {new Date(moviedetials.release_date).getFullYear()}
                  </span>
                  <h1 className="fs-1">{moviedetials.title}</h1>
                  {moviedetials.tagline && (
                    <p className="movie-details-tagline">
                      {moviedetials.tagline}
                    </p>
                  )}
                  <div className="movie-details-rating">
                    <span>
                      <i className="bi bi-star-fill" aria-hidden="true" />{" "}
                      {moviedetials.vote_average.toFixed(1)}
                    </span>
                    <span>{moviedetials.vote_count} votes</span>
                    {moviedetials.runtime && (
                      <span>
                        <i className="bi bi-clock" aria-hidden="true" />{" "}
                        {moviedetials.runtime} min
                      </span>
                    )}
                  </div>
                  <div className="movie-details-actions">
                    {moviedetials.homepage && (
                      <a
                        className="btn btn-warning"
                        href={moviedetials.homepage}
                      >
                        <i className="bi bi-play-fill" aria-hidden="true" />{" "}
                        Visit official site
                      </a>
                    )}
                    <button className="btn btn-outline-light" type="button">
                      <i className="bi bi-bookmark" aria-hidden="true" /> Add to
                      watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="movie-details-info">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-8">
                  <span className="movie-details-section-label">The story</span>
                  <h2>About {moviedetials.title}</h2>
                  <p className="movie-details-overview">
                    {moviedetials.overview}
                  </p>
                </div>

                <div className="col-lg-4">
                  <div className="movie-details-facts">
                    <div>
                      <span>Release date</span>
                      <strong>{moviedetials.release_date}</strong>
                    </div>
                    <div>
                      <span>Language</span>
                      <strong>
                        {moviedetials.spoken_languages?.[0]?.english_name ||
                          moviedetials.original_language}
                      </strong>
                    </div>
                    <div>
                      <span>Country</span>
                      <strong>
                        {moviedetials.production_countries?.[0]?.name ||
                          moviedetials.origin_country?.[0]}
                      </strong>
                    </div>
                    <div>
                      <span>Status</span>
                      <strong>{moviedetials.status}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
