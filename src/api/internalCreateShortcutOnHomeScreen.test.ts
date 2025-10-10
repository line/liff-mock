import { internalCreateShortcutOnHomeScreen } from './internalCreateShortcutOnHomeScreen';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('internalCreateShortcutOnHomeScreen', () => {
  it('should call mockStore.getMockData', async () => {
    await internalCreateShortcutOnHomeScreen({ url: 'testUrl' });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith(
      'internalCreateShortcutOnHomeScreen'
    );
  });
});
