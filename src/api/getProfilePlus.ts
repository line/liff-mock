import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getProfilePlus: ActualLiff['getProfilePlus'] = () => {
  return mockStore.getMockData('getProfilePlus');
};
