import { getDecodedIDToken } from './getDecodedIDToken';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getDecodedIDToken', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(getDecodedIDToken).toThrow(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    getDecodedIDToken();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('getDecodedIDToken');
  });
});
