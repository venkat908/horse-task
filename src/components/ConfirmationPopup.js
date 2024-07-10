import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { createEvent } from 'ics';

const ConfirmationPopup = () => {
  const booking = useSelector(state => state.booking);

  const handleDownloadICS = () => {
    const event = {
      start: booking.date.split('-').map(Number),
      duration: { hours: 1 },
      title: 'Horse Ride Booking',
      description: `Horse: ${booking.horse}`,
      location: 'Your stable address',
      status: 'CONFIRMED',
      organizer: { name: 'Your Name', email: 'your-email@example.com' },
      attendees: [{ name: booking.name, email: booking.email, rsvp: true }]
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }
      const blob = new Blob([value], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'booking.ics';
      a.click();
    });
  };

  return (
    <motion.div
      className="confirmation-popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {booking ? (
        <div>
          <h2>Booking Confirmed!</h2>
          <p>Horse: {booking.horse}</p>
          <p>Thank you for your booking, {booking.name}!</p>
          <button onClick={handleDownloadICS}>Download Calendar Invite</button>
        </div>
      ) : (
        <p>No booking found.</p>
      )}
    </motion.div>
  );
};

export default ConfirmationPopup;

