import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from '../../components/atoms';
import fbConfig from '../../configs/firebase/firebase.config';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { counter } = useHomeViewModel();
  const [user /** , loading, error */] = useAuthState(fbConfig.fbauth);
  return (
    <div>
      <h1>Home</h1>
      <div>Count:</div>
      <div>{counter.count}</div>

      <Button type="button" onClick={counter.increment}>
        Increment
      </Button>

      <Button type="button" onClick={counter.decrement}>
        Decrement
      </Button>

      <Button.Outlined type="button" onClick={counter.reset}>
        Reset
      </Button.Outlined>

      <br />
      <br />
      <br />

      {!user && <div>Firebase LoggedOut</div>}
      {user && <div>Firebase LoggedIn: {user.displayName}</div>}

      {/* this DIV for default login UI */}
      <div id="firebaseui-auth-container" />
      <div>
        {!user && (
          <Button.Outlined type="button" onClick={counter.login}>
            Login
          </Button.Outlined>
        )}
        {user && (
          <Button.Outlined type="button" onClick={counter.logout}>
            Logout
          </Button.Outlined>
        )}
      </div>
    </div>
  );
}
