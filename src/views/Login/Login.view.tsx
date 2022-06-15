import 'twin.macro';
import { WithTopBar } from '../../components/templates';
import useLoginViewModel from './Login.viewModel';

export default function Login() {
  useLoginViewModel();

  return (
    <WithTopBar hideBackButton pageTitle="Login">
      <div tw="flex w-full h-screen items-center justify-center">
        <div id="firebaseui-auth-container" />
      </div>
    </WithTopBar>
  );
}
