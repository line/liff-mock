import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

const getEvents: ActualLiff['calendar']['getEvents'] = () => {
  return Promise.resolve(mockStore.getMockData('calendar.getEvents'));
};

const showEventCreationModal: ActualLiff['calendar']['showEventCreationModal'] =
  () => {
    return Promise.resolve(
      mockStore.getMockData('calendar.showEventCreationModal')
    );
  };

export const calendar: ActualLiff['calendar'] = {
  getEvents,
  showEventCreationModal,
};
