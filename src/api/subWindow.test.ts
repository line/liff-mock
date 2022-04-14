import { subWindow } from './subWindow';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('subWindow', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  describe('on', () => {
    it('should call mockStore.getMockData', () => {
      subWindow.on('error', () => {
        return 0;
      });
      expect(_mockStore.getMockData).toBeCalledTimes(1);
      expect(_mockStore.getMockData).toBeCalledWith('subWindow.on');
    });
  });

  describe('off', () => {
    it('should call mockStore.getMockData', () => {
      subWindow.off('error', () => {
        return 0;
      });
      expect(_mockStore.getMockData).toBeCalledTimes(1);
      expect(_mockStore.getMockData).toBeCalledWith('subWindow.off');
    });
  });

  describe('open', () => {
    it('should call mockStore.getMockData', async () => {
      await subWindow.open({ url: '' });
      expect(_mockStore.getMockData).toBeCalledTimes(1);
      expect(_mockStore.getMockData).toBeCalledWith('subWindow.open');
    });
  });

  describe('cancel', () => {
    it('should call mockStore.getMockData', async () => {
      await subWindow.cancel({ url: '' });
      expect(_mockStore.getMockData).toBeCalledTimes(1);
      expect(_mockStore.getMockData).toBeCalledWith('subWindow.cancel');
    });
  });

  describe('submit', () => {
    it('should call mockStore.getMockData', async () => {
      await subWindow.submit({ url: '' });
      expect(_mockStore.getMockData).toBeCalledTimes(1);
      expect(_mockStore.getMockData).toBeCalledWith('subWindow.submit');
    });
  });
});
