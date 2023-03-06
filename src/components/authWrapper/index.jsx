import './styles.scss';

export default function AuthWrapper({headline, children}) {
  return (
    <div className="authWrapper">
      <div className="wrapper">
        {headline && <h2>{headline}</h2>}
        <div className="children">
          {children && children}
        </div>
      </div>
    </div>
  );
}
