import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getVersion: ActualLiff['getVersion'] = () => {
  return mockStore.getMockData('getVersion');
};
