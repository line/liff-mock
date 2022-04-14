import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const initPlugins: NonNullable<ActualLiff['initPlugins']> = () => {
  return Promise.resolve(mockStore.getMockData('initPlugins'));
};
