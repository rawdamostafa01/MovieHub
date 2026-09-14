import Footer from "../../componant/Footer/Footer";
import Navbar from "../../componant/Navbar/Navbar";
import Loading from "../../componant/Loading/Loading";
import { useEffect, useState } from "react";
import Movicard from "../../componant/Movicard/Movicard";
import "./Home.css";

export default function Home() {
  const [trandingMovies, setTrandingMovies] = useState(null);

  async function getMovie() {
    const respons = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7f5a8badc2ac14840fdeea550286a877",
    );
    const data = await respons.json();
    setTrandingMovies(data.results);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Navbar />
      {trandingMovies !== null ? (
        <div className="section">
          <div className="container">
            <div className="home-hero">
              <p className="home-kicker">Popular this week</p>
              <h1 className="home-title">Trending Movies</h1>
              <p className="home-description">
                Discover the latest and most loved movies from around the world.
              </p>
            </div>
            <div className="row g-2 py-4">
              {trandingMovies.map((movie) => (
                <Movicard datamovie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}
