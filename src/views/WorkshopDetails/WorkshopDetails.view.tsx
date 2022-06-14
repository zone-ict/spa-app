import WithTopBar from '../../components/templates/WithTopBar.template';
import useWorkshopDetailsViewModel from './WorkshopDetails.viewModel';

function WorkshopDetails() {
  useWorkshopDetailsViewModel();

  return (
    <WithTopBar pageTitle="Workshop Detail">
      <div>Workshop Details</div>
    </WithTopBar>
  );
}

export default WorkshopDetails;
