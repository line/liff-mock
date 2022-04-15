import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const isLoggedIn: ActualLiff['isLoggedIn'] = () => {
  return mockStore.getMockData('isLoggedIn');
};
