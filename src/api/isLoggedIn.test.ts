import { isLoggedIn } from './isLoggedIn';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('isLoggedIn', () => {
  it('should call mockStore.getMockData', () => {
    isLoggedIn();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('isLoggedIn');
  });
});
