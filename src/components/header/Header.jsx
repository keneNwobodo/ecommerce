import '../styles.scss';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

export default function Header () {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo shot" /></Link>
        </div>

        <div className="cta">
          <Link to="/registration">Register</Link>
        </div>
      </div>
    </header>
  );
}
