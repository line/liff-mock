import { createShortcutOnHomeScreen } from './createShortcutOnHomeScreen';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('createShortcutOnHomeScreen', () => {
  it('should call mockStore.getMockData', async () => {
    await createShortcutOnHomeScreen({ url: 'testUrl' });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith(
      'createShortcutOnHomeScreen'
    );
  });
});
