import { requestFriendship } from './requestFriendship';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('requestFriendship', () => {
  beforeEach(() => {
    globalStore.resetAll();
    jest.resetAllMocks();
  });

  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(requestFriendship).toThrow(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should throw an error if liff.login hasn`t been called yet', () => {
    globalStore.initIsCalled();

    expect(requestFriendship).toThrow(ERROR_MESSAGE.REQUIRE_LOGIN);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should resolve with the configured mock data', async () => {
    globalStore.initIsCalled();
    globalStore.loginIsCalled();
    _mockStore.getMockData.mockReturnValueOnce(undefined);

    await expect(
      requestFriendship({ officialAccount: { id: 'test-account' } })
    ).resolves.toBeUndefined();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('requestFriendship');
  });
});
