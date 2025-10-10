import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getOrigins: ActualLiff['getOrigins'] = () => {
  return mockStore.getMockData('getOrigins');
};
