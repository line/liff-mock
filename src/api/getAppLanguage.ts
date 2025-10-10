import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getAppLanguage: ActualLiff['getAppLanguage'] = () => {
  return mockStore.getMockData('getAppLanguage');
};
