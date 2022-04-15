import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const getIsVideoAutoPlay: ActualLiff['getIsVideoAutoPlay'] = () => {
  return mockStore.getMockData('getIsVideoAutoPlay');
};
