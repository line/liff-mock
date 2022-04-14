import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const logout: ActualLiff['logout'] = () => {
  if (!globalStore.isInitCalled) {
    throw new Error(ERROR_MESSAGE.REQUIRE_INIT);
  }
  return mockStore.getMockData('logout');
};
