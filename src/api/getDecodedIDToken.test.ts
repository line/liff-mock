import { getDecodedIDToken } from './getDecodedIDToken';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getDecodedIDToken', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(getDecodedIDToken).toThrowError(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    getDecodedIDToken();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('getDecodedIDToken');
  });
});
