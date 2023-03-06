import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import AuthWrapper from '../authWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import {auth} from '../../firebase/utils';
import {sendPasswordResetEmail} from 'firebase/auth';

const configWrapper = {
  headline: 'Password Reset',
};

const initialState = {
  email: '',
};
export default function EmailPassword () {
  const [emails, setEmails] = useState (initialState);
  const navigate = useNavigate ();

  // Handle Form Change Fun
  const handleChange = e => {
    const {name, value} = e.target;
    setEmails ({[name]: value});
  };

  // Handle Submit Func
  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const {email} = emails;

      // Email reset configurations
      const config = {
        url: 'http://localhost:3000/login',
      };

      await sendPasswordResetEmail (auth, email, config)
        .then (() => {
          console.log ('Password Reset Successful');
          navigate ('/login');
        })
        .catch (err => {
          console.log (err, 'Something Went Wrong');
        });
    } catch (err) {
      console.log (err);
    }
  };

  const {email} = emails;
  return (
    <AuthWrapper {...configWrapper}>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email:"
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            handleChange={handleChange}
          />

          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}
