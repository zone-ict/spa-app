import { CSSInterpolation } from '@emotion/serialize';
import 'twin.macro';

type Props = {
  containerStyle?: CSSInterpolation;
  contentStyle?: CSSInterpolation;
  children?: React.ReactNode;
};

function CenteredContent({ containerStyle, contentStyle, children }: Props) {
  return (
    <div tw="flex justify-center" css={containerStyle}>
      <div tw="flex flex-col max-w-md w-full" css={contentStyle}>
        {children}
      </div>
    </div>
  );
}

export default CenteredContent;
