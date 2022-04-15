import { set } from './set';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('set', () => {
  it('should call mockStore.save', () => {
    set({});
    expect(_mockStore.save).toBeCalledTimes(1);
    expect(_mockStore.save).toBeCalledWith({});
  });
});
