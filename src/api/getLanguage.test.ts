import { getLanguage } from './getLanguage';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getLanguage', () => {
  it('should call mockStore.getMockData', () => {
    getLanguage();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('getLanguage');
  });
});
