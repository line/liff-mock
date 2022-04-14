import { permanentLink_createUrlBy } from './permanentLink_createUrlBy';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
import { ERROR_MESSAGE } from '../const';
import { globalStore } from '../store/GlobalStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('permanentLink_createUrlBy', () => {
  it('should throw an error if liff.init hasn`t been called yet', () => {
    expect(permanentLink_createUrlBy).toThrowError(ERROR_MESSAGE.REQUIRE_INIT);
    expect(_mockStore.getMockData).toBeCalledTimes(0);
  });

  it('should call mockStore.getMockData', async () => {
    globalStore.initIsCalled();
    await permanentLink_createUrlBy('');
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('permanentLink.createUrlBy');
  });
});
