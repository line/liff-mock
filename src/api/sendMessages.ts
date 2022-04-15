import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const sendMessages: ActualLiff['sendMessages'] = () => {
  if (!globalStore.isInitCalled) {
    throw new Error(ERROR_MESSAGE.REQUIRE_INIT);
  }
  if (!globalStore.isLoginCalled) {
    throw new Error(ERROR_MESSAGE.REQUIRE_LOGIN);
  }
  return Promise.resolve(mockStore.getMockData('sendMessages'));
};
