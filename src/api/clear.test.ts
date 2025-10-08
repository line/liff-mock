import { clear } from './clear';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('clear', () => {
  it('should call mockStore.clearAll', () => {
    clear();
    expect(_mockStore.clearAll).toHaveBeenCalledTimes(1);
    expect(_mockStore.clearAll).toHaveBeenCalledWith();
  });
});
