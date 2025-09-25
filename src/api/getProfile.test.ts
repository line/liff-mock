import { getProfile } from './getProfile';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getProfile', () => {
  beforeEach(() => {
    globalStore.resetAll();
  });

  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(getProfile).toThrow(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should throw an error if liff.login hasn`t been called yet', () => {
    globalStore.initIsCalled();
    expect(getProfile).toThrow(ERROR_MESSAGE.REQUIRE_LOGIN);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    globalStore.loginIsCalled();
    getProfile();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('getProfile');
  });
});
