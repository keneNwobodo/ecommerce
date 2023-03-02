import '../styles.scss';
import logo from '../../assets/logo.png';

export default function Header () {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo shot" />
        </div>
      </div>
    </header>
  );
}
