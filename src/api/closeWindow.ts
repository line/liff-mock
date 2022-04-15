import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const closeWindow: ActualLiff['closeWindow'] = () => {
  return mockStore.getMockData('closeWindow');
};
