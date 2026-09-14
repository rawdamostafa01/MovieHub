import "./Movicard.css";
import { Link } from "react-router";
export default function Movicard({ datamovie }) {
  const {
    id,
    vote_average,
    poster_path,
    overview,
    title,
    media_type,
    release_date,
  } = datamovie;
  return (
    <div className="col-lg-3 col-md-6">
      <article className="movie-card">
        <div className="movie-card-poster-wrap ">
          <img
            className="movie-card-poster"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} movie poster`}
          />
          <span className="movie-card-score">
            <i className="bi bi-star-fill" aria-hidden="true" />{" "}
            {vote_average.toFixed(1)}
          </span>
          <button
            className="movie-card-bookmark"
            type="button"
            aria-label={`Add ${title} to watchlist`}
          >
            <i className="bi bi-bookmark" aria-hidden="true" />
          </button>
        </div>
        <div className="movie-card-content">
          <div className="movie-card-meta">
            <span>{media_type}</span>
            <span>{new Date(release_date).getFullYear()}</span>
          </div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link
            to={`/movie/${id}`}
            className="btn btn-warning movie-card-button"
            type="button"
          >
            View details <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  );
}
