import Footer from '../footer';
import Header from '../header/Header';

export default function HomeLayout({children}) {
  return (
    <div className="fullHeight">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
