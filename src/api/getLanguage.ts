import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getLanguage: ActualLiff['getLanguage'] = () => {
  return mockStore.getMockData('getLanguage');
};
