import { initPlugins } from './initPlugins';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('initPlugins', () => {
  it('should call mockStore.getMockData', async () => {
    await initPlugins([]);
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('initPlugins');
  });
});
