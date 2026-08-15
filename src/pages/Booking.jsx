import { useState } from "react";

function Booking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [transport, setTransport] = useState("Bus");

  const [results, setResults] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [bookingId, setBookingId] = useState("");
  const busList = [
    {
      name: "Express Travels",
      departure: "07:00 AM",
      arrival: "03:00 PM",
      price: 650
    },
    {
      name: "GreenLine Bus",
      departure: "09:30 AM",
      arrival: "05:30 PM",
      price: 550
    },
    {
      name: "Super Fast Travels",
      departure: "10:00 PM",
      arrival: "06:00 AM",
      price: 750
    }
  ];

  const trainList = [
    {
      name: "Pandian Express",
      departure: "09:15 PM",
      arrival: "06:00 AM",
      price: 450
    },
    {
      name: "Vaigai Express",
      departure: "07:00 AM",
      arrival: "02:30 PM",
      price: 520
    },
    {
      name: "Chennai Express",
      departure: "06:30 PM",
      arrival: "05:00 AM",
      price: 480
    }
  ];

  function bookingValidation(event) {
    event.preventDefault();

    if (from === "" || to === "" || date === "") {
      alert("Please fill all booking details");
      return;
    }

    setSelectedTicket(null);

    if (transport === "Bus") {
      setResults(busList);
    } else {
      setResults(trainList);
    }
  }

  function bookTicket(ticket) {
    setSelectedTicket(ticket);
  }

  function confirmBooking() {

  const id = "TE" + Math.floor(100000 + Math.random() * 900000);

  setBookingId(id);

}
  return (
    <div className="form-page">

      <div className="booking-container">

        {/* Booking Form */}
        <div className="form-box">

          <h2>Book Tickets</h2>

          <form onSubmit={bookingValidation}>

            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
            />

            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(event) => setTo(event.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />

            <select
              value={transport}
              onChange={(event) => setTransport(event.target.value)}
            >
              <option value="Bus">Bus</option>
              <option value="Train">Train</option>
            </select>

            <button type="submit">
              Search Tickets
            </button>

          </form>

        </div>

        {/* Results */}
        {results.length > 0 && (

          <div className="results">

            <h2>Available {transport}s</h2>

            <p>
              {from} → {to}
            </p>

            {results.map((item, index) => (

              <div className="ticket-card" key={index}>

                <h3>{item.name}</h3>

                <p>
                  🕐 {item.departure} → {item.arrival}
                </p>

                <p>
                  💰 ₹{item.price}
                </p>

                <button
                  type="button"
                  className="book-ticket-btn"
                  onClick={() => bookTicket(item)}
                >
                  Book Ticket
                </button>
                {bookingId && (
  <div className="receipt">

    <h3>✅ Booking Confirmed</h3>

    <p>
      <strong>Booking ID:</strong> {bookingId}
    </p>

    <p>
      <strong>Service:</strong> {selectedTicket.name}
    </p>

    <p>
      <strong>Route:</strong> {from} → {to}
    </p>

    <p>
      <strong>Date:</strong> {date}
    </p>

    <p>
      <strong>Price:</strong> ₹{selectedTicket.price}
    </p>

    <p>
      Thank you for booking with TravelEase!
    </p>

  </div>
)} 

              </div>

            ))}

          </div>

        )}

        {/* Confirmation */}
        {selectedTicket !== null && (

          <div className="booking-confirmation">

            <h2>🎉 Ticket Selected!</h2>

            <p>
              <strong>Service:</strong>{" "}
              {selectedTicket.name}
            </p>

            <p>
              <strong>Route:</strong>{" "}
              {from} → {to}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {date}
            </p>

            <p>
              <strong>Time:</strong>{" "}
              {selectedTicket.departure} →{" "}
              {selectedTicket.arrival}
            </p>

            <p>
              <strong>Price:</strong>{" "}
              ₹{selectedTicket.price}
            </p>

            <button
              type="button"
              className="confirm-button"
              onClick={confirmBooking}
            >
              Confirm Booking
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Booking;