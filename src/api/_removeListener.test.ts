import { _removeListener } from './_removeListener';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('_removeListener', () => {
  it('should call mockStore.getMockData', () => {
    _removeListener('', () => {
      return 1;
    });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('_removeListener');
  });
});
