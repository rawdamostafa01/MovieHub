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
            <div className="row g-2 py-5">
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
