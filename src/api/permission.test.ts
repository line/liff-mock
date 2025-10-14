import { permission } from './permission';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('permission', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  describe('query', () => {
    it('should call mockStore.getMockData', async () => {
      await permission.query('chat_message.write');
      expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
      expect(_mockStore.getMockData).toHaveBeenCalledWith('permission.query');
    });
  });

  describe('requestAll', () => {
    it('should call mockStore.getMockData', async () => {
      await permission.requestAll();
      expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
      expect(_mockStore.getMockData).toHaveBeenCalledWith(
        'permission.requestAll'
      );
    });
  });

  describe('getGrantedAll', () => {
    it('should call mockStore.getMockData', async () => {
      await permission.getGrantedAll();
      expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
      expect(_mockStore.getMockData).toHaveBeenCalledWith(
        'permission.getGrantedAll'
      );
    });
  });
});
