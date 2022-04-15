import { getIsVideoAutoPlay } from './getIsVideoAutoPlay';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getIsVideoAutoPlay', () => {
  it('should call mockStore.getMockData', () => {
    getIsVideoAutoPlay();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('getIsVideoAutoPlay');
  });
});
