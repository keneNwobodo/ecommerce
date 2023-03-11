import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {resetAuthAllForms, resetPassword} from '../../redux/User/userAction';
import AuthWrapper from '../authWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const configWrapper = {
  headline: 'Password Reset',
};

const mapState = ({user}) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  resetPasswordFailure: user.resetPasswordFailure,
});

export default function EmailPassword () {
  const [email, setEmail] = useState ('');
  const [errors, setErrors] = useState ([]);
  const {resetPasswordSuccess, resetPasswordFailure} = useSelector (mapState);
  const navigate = useNavigate ();
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (resetPasswordSuccess) {
        dispatch (resetAuthAllForms ());
        navigate ('/login');
      }
    },
    [resetPasswordSuccess]
  );

  useEffect (
    () => {
      if (
        Array.isArray (resetPasswordFailure) &&
        resetPasswordFailure.length > 0
      ) {
        setErrors (resetPasswordFailure);
      }
    },
    [resetPasswordFailure]
  );
  // Handle Submit Func
  const handleSubmit = e => {
    e.preventDefault ();
    dispatch (resetPassword ({email}));
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
