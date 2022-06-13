import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'twin.macro';
import svgs from '../../assets/svgs';
import { Text } from '../atoms';

export type TopBarProps = {
  onBackClick?(): void;
  pageTitle: string;
  hideBackButton?: boolean;
};

function TopBar({ onBackClick, pageTitle, hideBackButton }: TopBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = useMemo(() => !!location.key, [location.key]);

  const goBack = useCallback(() => {
    if (!canGoBack) return;
    navigate(-1);
  }, [canGoBack, navigate]);

  const backButton = useMemo(() => {
    if (hideBackButton) return null;
    return (
      <button type="button" onClick={onBackClick ?? goBack}>
        <img src={svgs.ArrowLeft} alt="Left Arrow" />
      </button>
    );
  }, [goBack, hideBackButton, onBackClick]);

  return (
    <header tw="fixed border-b border-b-gray-300 inline-flex items-center space-x-4 p-4 bg-white w-full max-w-md box-shadow[0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3pxrgba(0, 0, 0, 0.1)] z-50">
      {backButton}
      <Text.HeadingFive>{pageTitle}</Text.HeadingFive>
    </header>
  );
}

export default TopBar;
