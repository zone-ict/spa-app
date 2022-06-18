import React from 'react';
import 'twin.macro';
import { BottomBarMenus } from '../../components/molecules/BottomBar.molecule';
import { WorkshopList } from '../../components/organisms';
import WithTopBottomBar from '../../components/templates/WithTopBottomBar.template';
import useWorkshopsViewModel from './Workshops.viewModel';

export default function WorkshopsView() {
  const { navigateToBookings, navigateToWorkshopDetails, workshopData, navigateToSettings } =
    useWorkshopsViewModel();

  return (
    <WithTopBottomBar
      hideBackButton
      onBookingsClicked={navigateToBookings}
      onSettingsClicked={navigateToSettings}
      activeMenu={BottomBarMenus.Workshops}
      pageTitle="Workshops"
    >
      <WorkshopList data={workshopData} onItemClick={navigateToWorkshopDetails} />
    </WithTopBottomBar>
  );
}
