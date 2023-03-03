import {Routes, Route} from 'react-router-dom';

import HomeLayout from './components/homeLayout'; // Home Layout
import MainLayout from './components/mainLayout'; // Main Layout

import Registration from './pages/Home/Registration';
import Home from './pages/Home';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <MainLayout>
              <Registration />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
