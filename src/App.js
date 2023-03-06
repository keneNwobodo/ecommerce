import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {auth} from './firebase/utils';
import HomeLayout from './components/homeLayout'; // Home Layout
import MainLayout from './components/mainLayout'; // Main Layout
import Registration from './pages/Registration';
import Home from './pages/Home';
import Login from './pages/Login';
import RecoveryPassword from './pages/Recovery';

function App () {
  const [currentUser, setCurrentUser] = useState (null);
  const navigate = useNavigate ();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged (user => {
      if (!user) setCurrentUser (currentUser);
      setCurrentUser (prev => {
        return {
          ...prev,
          currentUser: user,
        };
      });
    });

    return () => unsubscribe ();
  });
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomeLayout currentUser={currentUser}>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/registration"
          element={
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout currentUser={currentUser}>
              <Login />
            </MainLayout>
          }
        />

        <Route
          path="/recovery"
          element={
            <MainLayout>
              <RecoveryPassword />
            </MainLayout>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
