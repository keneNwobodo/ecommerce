import Footer from '../footer';
import Header from '../header/Header';

export default function MainLayout({children}) {
  return (
    <div>
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  );
}
