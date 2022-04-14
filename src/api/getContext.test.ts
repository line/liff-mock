import { getContext } from './getContext';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('getContext', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(getContext).toThrowError(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    getContext();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('getContext');
  });
});
