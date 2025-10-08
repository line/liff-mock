import { _dispatchEvent } from './_dispatchEvent';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('_dispatchEvent', () => {
  it('should call mockStore.getMockData', () => {
    _dispatchEvent('');
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('_dispatchEvent');
  });
});
