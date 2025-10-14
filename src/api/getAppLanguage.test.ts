import { getAppLanguage } from './getAppLanguage';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getAppLanguage', () => {
  it('should call mockStore.getMockData', () => {
    getAppLanguage();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('getAppLanguage');
  });
});
