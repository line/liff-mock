import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const _call: ActualLiff['_call'] = () => {
  return mockStore.getMockData('_call');
};
