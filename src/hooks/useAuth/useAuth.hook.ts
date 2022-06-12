import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store/store.app';

export function useRedirectionBasedOnSession(isStorageRehydrated: boolean, isLoggedIn: boolean) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStorageRehydrated) return;

    navigate(isLoggedIn ? '/' : '/login');

    window.history.replaceState({}, document.title);
  }, [navigate, isStorageRehydrated, isLoggedIn]);
}

export default function useAuth() {
  // Ignored because that's the default naming for persist items
  // eslint-disable-next-line no-underscore-dangle
  const isStorageRehydrated = useSelector((state: RootState) => state._persist.rehydrated);
  const { isLoggedIn } = useSelector((state: RootState) => state.session);

  useRedirectionBasedOnSession(isStorageRehydrated, isLoggedIn);
}
