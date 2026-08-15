import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function contactValidation(event) {

    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields.");
      return;
    }

    alert("Message Submitted Successfully!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="form-page">

      <div className="form-box">

        <h2>Contact Us</h2>

        <form onSubmit={contactValidation}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <textarea
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;