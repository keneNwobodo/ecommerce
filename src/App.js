import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {auth, handleUserProfile} from './firebase/utils';
import {connect} from 'react-redux';
import HomeLayout from './components/homeLayout'; // Home Layout
import MainLayout from './components/mainLayout'; // Main Layout
import Registration from './pages/Registration';
import RecoveryPassword from './pages/Recovery';
import {setCurrentUser} from './redux/User/action';
import Home from './pages/Home';
import Login from './pages/Login';

function App (props) {
  const navigate = useNavigate ();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged (async user => {
      if (user) {
        const useRef = await handleUserProfile (auth);
        useRef.onSnapshot (snapshot => {
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

  const {currentUser} = props;
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
        {currentUser
          ? navigate ('/')
          : <Route
              path="/login"
              element={
                <MainLayout>
                  <Login />
                </MainLayout>
              }
            />}
        {/* <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        /> */}

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

// Map the states from the state object
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser (user)),
});

export default connect (mapStateToProps, mapDispatchToProps) (App);
