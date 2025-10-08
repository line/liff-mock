import { scanCode } from './scanCode';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('scanCode', () => {
  it('should call mockStore.getMockData', async () => {
    await scanCode();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('scanCode');
  });
});
