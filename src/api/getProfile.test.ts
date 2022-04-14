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
    expect(getProfile).toThrowError(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should throw an error if liff.login hasn`t been called yet', () => {
    globalStore.initIsCalled();
    expect(getProfile).toThrowError(ERROR_MESSAGE.REQUIRE_LOGIN);
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    globalStore.loginIsCalled();
    console.log(globalStore.isInitCalled);
    getProfile();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('getProfile');
  });
});
