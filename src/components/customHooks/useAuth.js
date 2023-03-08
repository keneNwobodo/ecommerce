import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

// Map the states from the state object
const mapState = ({user}) => ({
  currentUser: user.currentUser,
});

export default function useAuth () {
  const navigate = useNavigate ();
  const {currentUser} = useSelector (mapState);

  useEffect (
    () => {
      if (!currentUser) {
        navigate ('/login');
      }
      return currentUser;
    },
    [currentUser, navigate]
  );
}
