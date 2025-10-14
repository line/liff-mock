import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const createShortcutOnHomeScreen: ActualLiff['createShortcutOnHomeScreen'] =
  () => {
    return Promise.resolve(mockStore.getMockData('createShortcutOnHomeScreen'));
  };
