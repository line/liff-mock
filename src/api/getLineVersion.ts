import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getLineVersion: ActualLiff['getLineVersion'] = () => {
  return mockStore.getMockData('getLineVersion');
};
