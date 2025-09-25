import { logout } from './logout';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('logout', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(logout).toThrow(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    logout();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('logout');
  });
});
