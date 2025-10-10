import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const internalCreateShortcutOnHomeScreen: ActualLiff['internalCreateShortcutOnHomeScreen'] =
  () => {
    return Promise.resolve(
      mockStore.getMockData('internalCreateShortcutOnHomeScreen')
    );
  };
