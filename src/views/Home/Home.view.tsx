import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'twin.macro';
import { Button } from '../../components/atoms';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { WorkshopList } from '../../components/organisms';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import fbConfig from '../../configs/firebase/firebase.config';
import useHomeViewModel from './Home.viewModel';

export default function HomeView() {
  const { navigateToBookings, navigateToWorkshopDetails, login, logout } = useHomeViewModel();

  // TODO: Investigate what's causing this error
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [user /** , loading, error */] = useAuthState(fbConfig.fbAuth);

  return (
    <WithTopBottomBar
      hideBackButton
      onInactiveMenuClick={navigateToBookings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Workshops"
    >
      <WorkshopList onItemClick={navigateToWorkshopDetails} />
      <br />
      <br />
      <br />

      {/* TODO: Move this to Auth Page */}
      {!user && <div>Firebase LoggedOut</div>}
      {user && <div>Firebase LoggedIn: {user.displayName}</div>}

      {/* this DIV for default login UI */}
      <div id="firebaseui-auth-container" />
      <div>
        {!user && (
          <Button type="button" onClick={login}>
            Login
          </Button>
        )}
        {user && (
          <Button type="button" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
    </WithTopBottomBar>
  );
}
