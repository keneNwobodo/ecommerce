import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Registration from './pages/Home/Registration';
import Home from './pages/Home';

function App () {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
