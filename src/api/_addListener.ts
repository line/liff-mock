import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const _addListener: ActualLiff['_addListener'] = () => {
  return mockStore.getMockData('_addListener');
};
