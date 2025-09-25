import { permanentLink_createUrl } from './permanentLink_createUrl';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('permanentLink_createUrl', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(permanentLink_createUrl).toThrow(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(0);
  });

  it('should call mockStore.getMockData', () => {
    globalStore.initIsCalled();
    permanentLink_createUrl();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith(
      'permanentLink.createUrl'
    );
  });
});
