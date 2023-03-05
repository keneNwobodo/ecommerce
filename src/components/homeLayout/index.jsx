import Footer from '../footer';
import Header from '../header/Header';

export default function HomeLayout (props) {
  return (
    <div className="fullHeight">
      <Header {...props} />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
