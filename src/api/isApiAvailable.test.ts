import { isApiAvailable } from './isApiAvailable';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('isApiAvailable', () => {
  it('should call mockStore.getMockData', () => {
    isApiAvailable('someApi');
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('isApiAvailable');
  });
});
