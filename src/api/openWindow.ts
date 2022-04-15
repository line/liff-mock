import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const openWindow: ActualLiff['openWindow'] = () => {
  return mockStore.getMockData('openWindow');
};
