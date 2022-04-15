import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const _dispatchEvent: ActualLiff['_dispatchEvent'] = () => {
  return mockStore.getMockData('_dispatchEvent');
};
