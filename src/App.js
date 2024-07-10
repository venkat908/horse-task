import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmation" element={<ConfirmationPopup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
