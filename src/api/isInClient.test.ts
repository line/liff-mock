import { isInClient } from './isInClient';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('isInClient', () => {
  it('should call mockStore.getMockData', () => {
    isInClient();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('isInClient');
  });
});
