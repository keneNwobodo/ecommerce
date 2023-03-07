import {useState} from 'react';
import {auth, signInWithGoogle} from '../../firebase/utils';
import AuthWrapper from '../authWrapper';
import FormInput from '../../components/forms/FormInput';
import Button from '../forms/Button';
import './styles.scss';
import {Link} from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const configWrapper = {
  headline: 'Log In Page',
};

export default function SignIn () {
  const [user, setUser] = useState (initialState);

  const handleChange = e => {
    setUser (prev => {
      const {name, value} = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault ();

    const {email, password} = user;

    try {
      await signInWithGoogle (auth, email, password);
      setUser ({...user, user});
    } catch (err) {
      console.log (err);
    }
  };

  const {email, password} = user;
  return (
    <AuthWrapper {...configWrapper}>
      <div className="form__wrapper">
        <form action="" onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={handleChange}
          />

          <Button type="submit">Log In</Button>

          <div className="form__social">
            <div className="form__row">
              <Button onClick={signInWithGoogle}>
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
