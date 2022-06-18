import useAuthLoadingViewModel from './AuthLoading.viewModel';

export default function AuthLoading() {
  useAuthLoadingViewModel();

  return <div tw="mx-auto mt-20">Loading...</div>;
}
