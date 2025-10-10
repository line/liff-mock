import { getOrigins } from './getOrigins';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getOrigins', () => {
  it('should call mockStore.getMockData', () => {
    getOrigins();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('getOrigins');
  });
});
