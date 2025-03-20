import { useState } from "react";
import "./booking.css";

const Booking = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    diners: "",
    dateTime: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-overlay">
      <div className="booking-container">
        <button className="close-btn" onClick={closePopup}>✖</button>
        <h2 className="booking-heading">Book a Table</h2>
        <form className="booking-form">
          <input
            type="number"
            name="diners"
            placeholder="Number of Diners"
            value={formData.diners}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <button className="booking-btn">Check Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
