import { i18n_setLang } from './i18n_setLang';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('i18n_setLang', () => {
  it('should call mockStore.getMockData', () => {
    i18n_setLang('af');
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('i18n.setLang');
  });
});
