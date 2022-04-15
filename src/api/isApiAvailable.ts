import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const isApiAvailable: ActualLiff['isApiAvailable'] = () => {
  return mockStore.getMockData('isApiAvailable');
};
