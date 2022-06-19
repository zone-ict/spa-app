import { InformationCircleIcon, LogoutIcon, TranslateIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import tw from 'twin.macro';
import { Text } from '../../components/atoms';
import { LanguageSelect } from '../../components/molecules';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { WithTopBottomBar } from '../../components/templates';
import useSettingsViewModel from './Settings.viewModel';

const Content = tw.div`p-4 pt-6 pb-8 flex flex-col space-y-6`;
const Clickable = tw.div`cursor-pointer`;
// TODO: Uncomment this when implement user profile picture
// const Avatar = tw.img`w-14 h-14 rounded-full object-cover bg-gray-200`;
const IconContainer = tw.div`w-6 h-6 flex-shrink-0 flex-grow-0 text-gray-400`;
const TextSmall = tw.div`text-sm text-gray-900`;

function SettingsItem({
  icon,
  label,
  value,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  value?: React.ReactNode;
  onClick?(): void;
}) {
  return (
    <Clickable onClick={onClick} tw="flex items-center space-x-4 py-2">
      <IconContainer>{icon}</IconContainer>
      <Text.Small tw="flex-shrink-0 w-1/3">{label}</Text.Small>
      <TextSmall tw="flex-auto text-gray-500 text-right">{value}</TextSmall>
      <IconContainer>
        <ChevronRightIcon tw="w-full h-full" />
      </IconContainer>
    </Clickable>
  );
}

function WorkshopDetails() {
  const {
    navigateToWorkshops,
    navigateToBookings,
    handleLogout,
    currentUserData,
    translator,
    currentLanguage,
    handleChangeLanguage,
  } = useSettingsViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onWorkshopsClicked={navigateToWorkshops}
      onBookingsClicked={navigateToBookings}
      activeMenu={BottomBarMenus.Settings}
      pageTitle={translator.translate('Settings')}
    >
      <Content>
        <Clickable tw="flex items-center space-x-4">
          {/* <Avatar src="https://via.placeholder.com/300" /> */}
          <div>
            <Text>{currentUserData.name ?? 'User'}</Text>
            <Text.Label tw="text-gray-500">
              {currentUserData.email ?? 'email@domain.com'}
            </Text.Label>
          </div>
        </Clickable>
        <hr />
        <SettingsItem
          icon={<TranslateIcon />}
          label={translator.translate('Language')}
          value={
            <LanguageSelect selectedLanguage={currentLanguage} onChange={handleChangeLanguage} />
          }
        />
        <hr />
        <div>
          <SettingsItem
            icon={<InformationCircleIcon />}
            label={translator.translate('Privacy Policy')}
          />
          <SettingsItem
            icon={<InformationCircleIcon />}
            label={translator.translate('About this app')}
          />
        </div>
        <Clickable onClick={handleLogout} tw="flex items-center space-x-4 py-2">
          <IconContainer tw="text-red-500">
            <LogoutIcon />
          </IconContainer>
          <Text.Small tw="text-red-500 flex-auto">{translator.translate('Sign out')}</Text.Small>
        </Clickable>
      </Content>
    </WithTopBottomBar>
  );
}

export default WorkshopDetails;
