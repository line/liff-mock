import { mockStore } from '../store/MockDataStore';

export const clear = (): void => {
  mockStore.clearAll();
};
