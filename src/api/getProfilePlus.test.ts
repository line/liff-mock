import { getProfilePlus } from './getProfilePlus';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getProfilePlus', () => {
  it('should call mockStore.getMockData', () => {
    getProfilePlus();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('getProfilePlus');
  });
});
