import { closeWindow } from './closeWindow';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('closeWindow', () => {
  it('should call mockStore.getMockData', () => {
    closeWindow();
    expect(_mockStore.getMockData).toBeCalledTimes(1);
    expect(_mockStore.getMockData).toBeCalledWith('closeWindow');
  });
});
