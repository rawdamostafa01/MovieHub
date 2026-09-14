import "./Loading.css";

export default function Loading() {
  return (
    <main className="movi-loading" aria-live="polite" aria-label="Loading">
      <div className="movi-loading-content">
        <div className="movi-loading-mark" aria-hidden="true">
          <i className="bi bi-film" />
        </div>
        <h1>Movie</h1>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Preparing your next story</p>
      </div>
    </main>
  );
}
