import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {auth} from '../../firebase/utils';
import logo from '../../assets/logo.png';
import '../styles.scss';

const mapState = ({user}) => ({
  currentUser: user.currentUser,
});
function Header () {
  const {currentUser} = useSelector (mapState);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo shot" /></Link>
        </div>

        <div className="cta">
          {currentUser && <Link to="/dashboard">My Account</Link>}
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

export default Header;
