import { isSubWindow } from './isSubWindow';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('isSubWindow', () => {
  it('should call mockStore.getMockData', () => {
    isSubWindow();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('isSubWindow');
  });
});
