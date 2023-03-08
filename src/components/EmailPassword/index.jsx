import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthWrapper from '../authWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import {auth} from '../../firebase/utils';
import {sendPasswordResetEmail} from 'firebase/auth';

const configWrapper = {
  headline: 'Password Reset',
};

export default function EmailPassword () {
  const [email, setEmail] = useState ('');
  const [errors, setErrors] = useState ([]);
  const navigate = useNavigate ();

  // Handle Submit Func
  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      // Email reset configurations
      const config = {
        url: 'http://localhost:3000/login',
      };

      await sendPasswordResetEmail (auth, email, config)
        .then (() => {
          navigate ('/login');
        })
        .catch (() => {
          const err = ['Email not found'];
          setEmail ('');
          setErrors (err);
        });
    } catch (err) {
      // console.log (err);
    }
  };

  return (
    <AuthWrapper {...configWrapper}>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email:"
            type="email"
            value={email}
            placeholder="Email Address"
            handleChange={e => setEmail (e.target.value)}
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

          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}
