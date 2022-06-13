import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import svgs from '../../assets/svgs';
import { Text } from '../atoms';

export enum BottomBarMenus {
  Workshops,
  Bookings,
}

export type BottomBarProps = {
  activeMenu: BottomBarMenus;
  onInactiveMenuClick(): void;
};

const FooterContainer = styled.footer(() => [
  tw`fixed bottom-0 py-3 bg-white flex w-full max-w-md justify-around`,
  tw`border-t border-t-gray-300 box-shadow[0px -1px 2pxrgba(0, 0, 0, 0.06), 0px -1px 3px rgba(0, 0, 0, 0.1)]`,
]);

const BottomBarItem = styled.button(() => [tw`inline-flex flex-col items-center`]);

const BottomBarIcon = styled.img(() => [tw`w-6 h-6`]);

const BottomBarText = styled(Text.Label)<{ inactive?: boolean }>(({ inactive }) => [
  inactive && tw`text-gray-400`,
]);

function BottomBar({ activeMenu, onInactiveMenuClick }: BottomBarProps) {
  const workshopsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Workshops;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onInactiveMenuClick}>
        <BottomBarIcon
          src={isActive ? svgs.LocationMarker : svgs.LocationMarkerInactive}
          alt="Workshops Icon"
        />
        <BottomBarText inactive={!isActive}>Workshops</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onInactiveMenuClick]);

  const bookingsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Bookings;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onInactiveMenuClick}>
        <BottomBarIcon src={isActive ? svgs.Calendar : svgs.CalendarInactive} alt="Bookings Icon" />
        <BottomBarText inactive={!isActive}>Bookings</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onInactiveMenuClick]);

  return (
    <FooterContainer>
      {workshopsItem}
      {bookingsItem}
    </FooterContainer>
  );
}

export default BottomBar;
