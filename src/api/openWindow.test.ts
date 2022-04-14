import { openWindow } from './openWindow';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('openWindow', () => {
  it('should call mockStore.getMockData', () => {
    openWindow({ url: 'https://line.me' });
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('openWindow');
  });
});
