import { CogIcon } from '@heroicons/react/solid';
import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import svgs from '../../assets/svgs';
import { Text } from '../atoms';

export enum BottomBarMenus {
  Workshops,
  Bookings,
  Settings,
}

export type BottomBarProps = {
  activeMenu: BottomBarMenus;
  onWorkshopsClicked?(): void;
  onBookingsClicked?(): void;
  onSettingsClicked?(): void;
};

const FooterContainer = styled.footer(() => [
  tw`fixed bottom-0 py-3 bg-white flex w-full max-w-md justify-around`,
  tw`box-shadow[0px -1px 2px rgba(0, 0, 0, 0.06), 0px -1px 3px rgba(0, 0, 0, 0.1)]`,
]);

const BottomBarItem = styled.button(() => [tw`inline-flex flex-col items-center`]);

const BottomBarIcon = styled.img(() => [tw`w-6 h-6`]);

const BottomBarText = styled(Text.Label)<{ inactive?: boolean }>(({ inactive }) => [
  inactive && tw`text-gray-400`,
]);

function BottomBar({
  activeMenu,
  onWorkshopsClicked,
  onBookingsClicked,
  onSettingsClicked,
}: BottomBarProps) {
  const workshopsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Workshops;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onWorkshopsClicked}>
        <BottomBarIcon
          src={isActive ? svgs.LocationMarker : svgs.LocationMarkerInactive}
          alt="Workshops Icon"
        />
        <BottomBarText inactive={!isActive}>Workshops</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onWorkshopsClicked]);

  const bookingsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Bookings;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onBookingsClicked}>
        <BottomBarIcon src={isActive ? svgs.Calendar : svgs.CalendarInactive} alt="Bookings Icon" />
        <BottomBarText inactive={!isActive}>Bookings</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onBookingsClicked]);

  const settingsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Settings;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onSettingsClicked}>
        <CogIcon css={[tw`w-6 h-6`, isActive ? tw`text-gray-900` : tw`text-gray-400`]} />
        <BottomBarText inactive={!isActive}>Settings</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onSettingsClicked]);

  return (
    <FooterContainer>
      {workshopsItem}
      {bookingsItem}
      {settingsItem}
    </FooterContainer>
  );
}

export default BottomBar;
