import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <h1>Book Bus & Train Tickets Online</h1>

        <p>
          Fast, Secure and Hassle-Free Travel Booking
        </p>

        <Link to="/booking">
          <button className="btn btn-warning btn-lg">
            Book Now
          </button>
        </Link>

      </section>


      {/* Services Section */}
      <section className="container my-5">

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card service-card h-100">

              <div className="card-body text-center">

                <h3>🚌 Bus Booking</h3>

                <p>
                  Book bus tickets across various routes
                  quickly and easily.
                </p>

                <Link to="/booking">
                  <button className="btn btn-primary">
                    Book Bus
                  </button>
                </Link>

              </div>

            </div>
          </div>


          <div className="col-md-4">
            <div className="card service-card h-100">

              <div className="card-body text-center">

                <h3>🚆 Train Booking</h3>

                <p>
                  Search and reserve train tickets
                  with a simple interface.
                </p>

                <Link to="/booking">
                  <button className="btn btn-primary">
                    Book Train
                  </button>
                </Link>

              </div>

            </div>
          </div>


          <div className="col-md-4">
            <div className="card service-card h-100">

              <div className="card-body text-center">

                <h3>💳 Easy Booking</h3>

                <p>
                  Simple and user-friendly booking
                  experience.
                </p>

                <Link to="/booking">
                  <button className="btn btn-primary">
                    Start Booking
                  </button>
                </Link>

              </div>

            </div>
          </div>

        </div>

      </section>
    </>
  );
}

function App() {

  return (

    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">

    <Link className="navbar-brand fw-bold" to="/">
      TravelEase
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarMenu">

      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/booking">
            Booking
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>

      </ul>

    </div>
  </div>
</nav>


      {/* Pages */}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>


      {/* Footer */}

      <footer>

        <p>
          © 2026 Bus & Train Booking System | Created by Prakash D
        </p>

      </footer>

    </BrowserRouter>

  );
}


export default App;