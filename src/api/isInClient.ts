import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const isInClient: ActualLiff['isInClient'] = () => {
  return mockStore.getMockData('isInClient');
};
