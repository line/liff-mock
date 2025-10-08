import { _postMessage } from './_postMessage';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('_postMessage', () => {
  it('should call mockStore.getMockData', () => {
    _postMessage('a', () => {
      return;
    });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('_postMessage');
  });
});
