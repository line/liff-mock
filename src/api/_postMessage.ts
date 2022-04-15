import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const _postMessage: ActualLiff['_postMessage'] = () => {
  return mockStore.getMockData('_postMessage');
};
