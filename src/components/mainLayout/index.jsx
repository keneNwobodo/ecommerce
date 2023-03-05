import Footer from '../footer';
import Header from '../header/Header';

export default function MainLayout (props) {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
