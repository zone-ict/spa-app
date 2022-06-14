import WithTopBar from '../../components/templates/WithTopBar.template';
import useActivityDetailsViewModel from './ActivityDetails.viewModel';

function ActivityDetails() {
  useActivityDetailsViewModel();

  return <WithTopBar pageTitle="Activity Detail">Activity Detail</WithTopBar>;
}

export default ActivityDetails;
