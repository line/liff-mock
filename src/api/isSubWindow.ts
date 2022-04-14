import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const isSubWindow: ActualLiff['isSubWindow'] = () => {
  return mockStore.getMockData('isSubWindow');
};
