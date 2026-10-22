import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

const getCallState: ActualLiff['activity']['getCallState'] = () => {
  return mockStore.getMockData('activity.getCallState');
};

const getRecordingState: ActualLiff['activity']['getRecordingState'] = () => {
  return mockStore.getMockData('activity.getRecordingState');
};

export const activity: ActualLiff['activity'] = {
  getCallState,
  getRecordingState,
};
