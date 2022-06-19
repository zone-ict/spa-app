import 'twin.macro';
import { WithTopBar } from '../../components/templates';
import useLoginViewModel from './Login.viewModel';

export default function Login() {
  const { translate } = useLoginViewModel();

  return (
    <WithTopBar hideBackButton pageTitle={translate('Login')}>
      <div tw="flex w-full h-screen items-center justify-center">
        <div id="firebaseui-auth-container" />
      </div>
    </WithTopBar>
  );
}
