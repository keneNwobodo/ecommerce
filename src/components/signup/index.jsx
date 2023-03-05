import {useState} from 'react';
import Button from '../../components/forms/Button';
import FormInput from '../forms/Button/FormInput';

import './styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Signup () {
  const [user, setUser] = useState (initialState);

  const handleChange = e => {
    const {name, value} = e.target;
    setUser (prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // Destructure the state variables from the state holder
  const {displayName, email, password, confirmPassword} = user;
  return (
    <div className="signup">
      <div className="wrapper">
        <h2> signup</h2>

        <div className="form__wrapper">
          <form action="" method="post">
            <FormInput
              label="Full Name:"
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={handleChange}
            />

            <FormInput
              label="Email Address:"
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
            />

            <FormInput
              label="Password:"
              type="password"
              name="password"
              value={password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />

            <FormInput
              label="Confirm Password:"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Enter Same Password"
              onChange={handleChange}
            />

            <Button type="submit">Signup</Button>

          </form>
        </div>
      </div>
    </div>
  );
}
