import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBooking } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const [horse, setHorse] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (!horse) {
      toast.error('Please select a horse.');
      valid = false;
    }
    if (!date) {
      toast.error('Please select a date.');
      valid = false;
    }
    if (!time) {
      toast.error('Please select a time.');
      valid = false;
    }
    if (!name) {
      toast.error('Please enter your name.');
      valid = false;
    }
    if (!email) {
      toast.error('Please enter your email.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email address is invalid.');
      valid = false;
    }
    if (!phone) {
      toast.error('Please enter your phone number.');
      valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      toast.error('Phone number is invalid.');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookingDetails = {
        horse,
        date,
        time,
        name,
        email,
        phone,
      };

      dispatch(setBooking(bookingDetails));
      navigate('/confirmation');
    }
  };

  return (
    <div className="booking-form">
      <ToastContainer />
      <h2>Book Your Horse Ride</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Horse:
          <select value={horse} onChange={(e) => setHorse(e.target.value)}>
            <option value="">Select a horse</option>
            <option value="Horse 1">Horse 1</option>
            <option value="Horse 2">Horse 2</option>
            <option value="Horse 3">Horse 3</option>
            <option value="Horse 4">Horse 4</option>
          </select>
        </label>
        <br></br><br></br>
        <label>
          Select Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br></br><br></br>
        <label>
          Select Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br></br>
        <br></br>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};
<ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

export default BookingForm;

