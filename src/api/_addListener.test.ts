import { _addListener } from './_addListener';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('_addListener', () => {
  it('should call mockStore.getMockData', () => {
    _addListener('a', () => {
      return;
    });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('_addListener');
  });
});
