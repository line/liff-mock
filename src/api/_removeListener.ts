import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const _removeListener: ActualLiff['_removeListener'] = () => {
  return mockStore.getMockData('_removeListener');
};
