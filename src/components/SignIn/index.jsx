import Button from '../forms/Button';
import {signInWithGoogle} from '../../firebase/utils';
import './styles.scss';

export default function SignIn () {
  const handleSubmit = async e => {
    e.preventDefault ();
  };
  return (
    <div className="signin">
      <div className="wrapper">
        <h2>Log In</h2>

        <div className="form__wrapper">
          <form action="" onSubmit={handleSubmit}>
            <div className="form__social">
              <div className="form__row">
                <Button onClick={signInWithGoogle}>
                  Sig In With Google
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
