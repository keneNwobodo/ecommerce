import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth, handleUserProfile} from './firebase/utils';
import {onSnapshot} from 'firebase/firestore';
import {setCurrentUser} from './redux/User/action';
import HomeLayout from './components/homeLayout'; // Home Layout
import MainLayout from './components/mainLayout'; // Main Layout
import Registration from './pages/Registration';
import RecoveryPassword from './pages/Recovery';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WithAuth from './components/hoc/withAuth';

function App (props) {
  const {setCurrentUser} = props;

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged (async user => {
      if (user) {
        const useRef = await handleUserProfile (auth);
        onSnapshot (useRef, snapshot => {
          setCurrentUser ({
            id: snapshot.id,
            ...snapshot.data (),
          });
        });
      }
      setCurrentUser (user);
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

        <Route
          path="/login"
          element={
            <MainLayout>
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

        <Route
          path="/dashboard"
          element={
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          }
        />
      </Routes>

    </div>
  );
}

// Map the states from the state object
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser (user)),
});

export default connect (mapStateToProps, mapDispatchToProps) (App);
