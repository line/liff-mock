import { MockData, mockStore } from '../store/MockDataStore';

export const set = (
  data: Partial<MockData> | ((prev: Partial<MockData>) => Partial<MockData>)
): void => {
  mockStore.save(data);
};
