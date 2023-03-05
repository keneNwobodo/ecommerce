import {Link} from 'react-router-dom';
import {auth} from '../../firebase/utils';
import '../styles.scss';
import logo from '../../assets/logo.png';

export default function Header({currentUser}) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo shot" /></Link>
        </div>

        <div className="cta">
          {currentUser &&
            <Link to="/" onClick={() => auth.signOut ()}>LogOut</Link>}
          {!currentUser && <Link to="/registration">Register</Link>}
          {!currentUser && <Link to="/login">Login</Link>}

        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null,
};
