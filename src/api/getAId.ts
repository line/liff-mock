import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getAId: ActualLiff['getAId'] = () => {
  return mockStore.getMockData('getAId');
};
