import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Notfound from "./pages/Notfound/Notfound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Bounce, ToastContainer } from "react-toastify";
import Movidetails from "./pages/Moviedetails/Moviedetails";
function App() {
  return (
    <>
      <BrowserRouter basename="/MovieHub">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/movie/:id" element={<Movidetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
