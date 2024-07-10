// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="landing-page">
//       <h1>Welcome to Horse Ride Booking</h1>
//       <div className="horses">
//         {['Horse 1', 'Horse 2', 'Horse 3', 'Horse 4'].map((horse, index) => (
//            <div key={index} className="horse">
//              <img src={`path/to/horse${index + 1}.jpg`} alt={horse} />
//              <p>{horse}</p>
//            </div>
//         ))}
//       </div>
//       <button onClick={() => navigate('/booking')}>Book Now</button>
//     </div>
//   );
// };

// export default LandingPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import horse1Img from '../images/horse1.jpg';
import horse2Img from '../images/horse2.jpg';
import horse3Img from '../images/horse3.jpg';
import horse4Img from '../images/horse4.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  const horses = [
    { name: 'Horse 1', img: horse1Img },
    { name: 'Horse 2', img: horse2Img },
    { name: 'Horse 3', img: horse3Img },
    { name: 'Horse 4', img: horse4Img }
  ];

  return (
    <div className="landing-page">
      <h1>Welcome to Horse Ride Booking</h1>
      <div className="horses">
        {horses.map((horse, index) => (
          <div key={index} className="horse">
            <img src={horse.img} alt={horse.name} />
            <p>{horse.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/booking')}>Book Now</button>
    </div>
  );
};

export default LandingPage;

