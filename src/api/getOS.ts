import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getOS: ActualLiff['getOS'] = () => {
  return mockStore.getMockData('getOS');
};
