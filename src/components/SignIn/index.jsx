import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {
  emailSignInStart,
  resetAuthAllForms,
  signInUser,
} from '../../redux/User/userAction';
import {signInWithGoogle} from '../../redux/User/userAction';
import AuthWrapper from '../authWrapper';
import FormInput from '../../components/forms/FormInput';
import Button from '../forms/Button';
import './styles.scss';

const mapState = ({user}) => ({
  signInSuccess: user.signInSuccess,
});

export default function SignIn () {
  const {signInSuccess} = useSelector (mapState);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const dispatch = useDispatch ();
  const navigate = useNavigate ();

  // Reset the form input fields
  function resetForm () {
    setEmail ('');
    setPassword ('');
  }

  useEffect (
    () => {
      if (signInSuccess) {
        resetForm ();
        dispatch (resetAuthAllForms ());
        // navigate ('/');
      }
    },
    [signInSuccess]
  );

  // Handle Form Submit Func
  const handleSubmit = e => {
    e.preventDefault ();
    dispatch (emailSignInStart ({email, password}));
    resetForm ();
  };

  const handleGoogleSignIn = () => {
    dispatch (signInWithGoogle ());
  };

  const configWrapper = {
    headline: 'Log In Page',
  };

  return (
    <AuthWrapper {...configWrapper}>
      <div className="form__wrapper">

        <form action="" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail (e.target.value)}
          />

          <FormInput
            type="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword (e.target.value)}
          />

          <Button type="submit">Log In</Button>

          <div className="form__social">
            <div className="form__row">
              <Button onClick={handleGoogleSignIn}>
                Log In With Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}
