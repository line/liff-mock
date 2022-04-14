import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const scanCode: NonNullable<ActualLiff['scanCode']> = () => {
  return Promise.resolve(mockStore.getMockData('scanCode'));
};
