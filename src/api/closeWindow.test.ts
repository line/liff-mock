import { closeWindow } from './closeWindow';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('closeWindow', () => {
  it('should call mockStore.getMockData', () => {
    closeWindow();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('closeWindow');
  });
});
