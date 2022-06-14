import { CSSInterpolation } from '@emotion/serialize';
import 'twin.macro';
import TopBar, { TopBarProps } from '../molecules/TopBar.molecule';

type Props = TopBarProps & {
  containerStyle?: CSSInterpolation;
  contentStyle?: CSSInterpolation;
  children?: React.ReactNode;
};

function WithTopBar({ containerStyle, contentStyle, children, pageTitle, onBackClick }: Props) {
  return (
    <div tw="flex justify-center bg-gray-100" css={containerStyle}>
      <div
        tw="flex flex-col max-w-md w-full h-full min-h-screen bg-white overflow-hidden"
        css={contentStyle}
      >
        <TopBar pageTitle={pageTitle} onBackClick={onBackClick} />
        <div tw="h-14" />
        {children}
      </div>
    </div>
  );
}

export default WithTopBar;
