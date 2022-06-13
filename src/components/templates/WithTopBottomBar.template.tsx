import { CSSInterpolation } from '@emotion/serialize';
import 'twin.macro';
import BottomBar, { BottomBarProps } from '../molecules/BottomBar.molecule';
import TopBar, { TopBarProps } from '../molecules/TopBar.molecule';

type Props = TopBarProps &
  BottomBarProps & {
    containerStyle?: CSSInterpolation;
    contentStyle?: CSSInterpolation;
    children?: React.ReactNode;
  };

function WithTopBottomBar({
  containerStyle,
  contentStyle,
  children,
  pageTitle,
  onBackClick,
  activeMenu,
  onInactiveMenuClick,
}: Props) {
  return (
    <div tw="flex justify-center" css={containerStyle}>
      <div tw="flex flex-col max-w-md w-full bg-white" css={contentStyle}>
        <TopBar pageTitle={pageTitle} onBackClick={onBackClick} />
        <div tw="h-14" />
        {children}
        <div tw="h-[60px]" />
        <BottomBar activeMenu={activeMenu} onInactiveMenuClick={onInactiveMenuClick} />
      </div>
    </div>
  );
}

export default WithTopBottomBar;
