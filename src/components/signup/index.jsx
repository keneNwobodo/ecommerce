import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, handleUserProfile} from '../../firebase/utils';
import Button from '../../components/forms/Button';
import FormInput from '../forms/FormInput';
import AuthWrapper from '../authWrapper';

import './styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
};

const configWrapper = {
  headline: 'Registration Page',
};

export default function Signup () {
  const [user, setUser] = useState (initialState);
  const navigate = useNavigate ();

  const handleChange = e => {
    const {name, value} = e.target;
    setUser (prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle Form Submit
  const handleFormSubmit = async e => {
    e.preventDefault ();

    const {displayName, email, password, confirmPassword, errors} = user;

    if (password !== confirmPassword) {
      const err = ['Password does not match'];
      setUser (prev => {
        return {
          ...prev,
          errors: err,
        };
      });
    }

    try {
      const {user} = await createUserWithEmailAndPassword (
        auth,
        email,
        password
      );
      await handleUserProfile (user, {displayName});
      setUser ({
        ...user,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: [],
      });
      navigate ('/');
    } catch (err) {
      console.log (err.message);
    }
  };
  // Destructure the state variables from the state holder
  const {displayName, email, password, confirmPassword, errors} = user;
  return (
    <AuthWrapper {...configWrapper}>
      <div className="form__wrapper">
        <form action="" method="post" onSubmit={handleFormSubmit}>

          <FormInput
            label="Full Name:"
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            handleChange={handleChange}
          />

          <FormInput
            label="Email Address:"
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            handleChange={handleChange}
          />

          <FormInput
            label="Password:"
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            handleChange={handleChange}
          />

          <FormInput
            label="Confirm Password:"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Enter Same Password"
            handleChange={handleChange}
          />
          {errors.map ((err, i) => (
            <span
              style={{
                display: 'block',
                paddingBottom: '10px',
                fontSize: '15px',
                color: 'red',
              }}
              key={i}
            >
              {err}
            </span>
          ))}

          <Button type="submit">Register</Button>

          <div className="links">
            Already have an account?
            <Link to="/login">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}
