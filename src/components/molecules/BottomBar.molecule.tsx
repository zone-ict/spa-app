import { CalendarIcon, CogIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import useTranslator from '../../hooks/useTranslator/useTranslator.hook';
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
  tw`fixed bottom-0 flex justify-around w-full max-w-md py-3 bg-white`,
  tw`box-shadow[0px -1px 2px rgba(0, 0, 0, 0.06), 0px -1px 3px rgba(0, 0, 0, 0.1)]`,
]);

const BottomBarItem = styled.button(() => [tw`inline-flex flex-col items-center w-1/3`]);

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
  const translator = useTranslator();

  const workshopsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Workshops;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onWorkshopsClicked}>
        <LocationMarkerIcon css={[tw`w-6 h-6`, isActive ? tw`text-gray-900` : tw`text-gray-400`]} />
        <BottomBarText inactive={!isActive}>{translator.translate('Workshops')}</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onWorkshopsClicked, translator]);

  const bookingsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Bookings;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onBookingsClicked}>
        <CalendarIcon css={[tw`w-6 h-6`, isActive ? tw`text-gray-900` : tw`text-gray-400`]} />
        <BottomBarText inactive={!isActive}>{translator.translate('Bookings')}</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onBookingsClicked, translator]);

  const settingsItem = useMemo(() => {
    const isActive = activeMenu === BottomBarMenus.Settings;
    return (
      <BottomBarItem type="button" onClick={isActive ? undefined : onSettingsClicked}>
        <CogIcon css={[tw`w-6 h-6`, isActive ? tw`text-gray-900` : tw`text-gray-400`]} />
        <BottomBarText inactive={!isActive}>{translator.translate('Settings')}</BottomBarText>
      </BottomBarItem>
    );
  }, [activeMenu, onSettingsClicked, translator]);

  return (
    <FooterContainer>
      {workshopsItem}
      {bookingsItem}
      {settingsItem}
    </FooterContainer>
  );
}

export default BottomBar;
