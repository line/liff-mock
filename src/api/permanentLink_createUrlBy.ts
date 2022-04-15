import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const permanentLink_createUrlBy: ActualLiff['permanentLink']['createUrlBy'] =
  () => {
    if (!globalStore.isInitCalled) {
      throw new Error(ERROR_MESSAGE.REQUIRE_INIT);
    }
    return Promise.resolve(mockStore.getMockData('permanentLink.createUrlBy'));
  };
