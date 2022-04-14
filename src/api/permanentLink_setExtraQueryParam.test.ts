import { permanentLink_setExtraQueryParam } from './permanentLink_setExtraQueryParam';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('permanentLink_setExtraQueryParam', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(permanentLink_setExtraQueryParam).toThrowError(
      ERROR_MESSAGE.REQUIRE_INIT
    );
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    permanentLink_setExtraQueryParam('hoge');
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith(
      'permanentLink.setExtraQueryParam'
    );
  });
});
