import horoscopeObj from '../data/horoscopes';
import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';


const Navbar = () => {
  console.log("re rendering")
  const horoscopes = Object.keys(horoscopeObj);
  const { setCurrentSign} = useContext(HoroscopeContext);
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={e => setCurrentSign(sign)}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
