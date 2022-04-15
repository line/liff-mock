import { defaultMockData } from './defaultValue';
import { mockStore } from './MockDataStore';

describe('MockDataStore', () => {
  it('should store the given data', () => {
    mockStore.save({ getOS: 'android' });
    expect(mockStore.getMockData('getOS')).toBe('android');
    mockStore.save({ getOS: 'ios' });
    expect(mockStore.getMockData('getOS')).toBe('ios');
  });

  it('should store the given data with functional updator', () => {
    mockStore.save({
      getOS: 'android',
      getProfile: { userId: 'id', displayName: 'name' },
    });
    expect(mockStore.getMockData('getOS')).toBe('android');
    expect(mockStore.getMockData('getProfile')).toStrictEqual({
      userId: 'id',
      displayName: 'name',
    });
    mockStore.save((prev) => ({ ...prev, getOS: 'ios' }));
    expect(mockStore.getMockData('getOS')).toBe('ios');
    expect(mockStore.getMockData('getProfile')).toStrictEqual({
      userId: 'id',
      displayName: 'name',
    });
  });

  it('should clear all data', () => {
    mockStore.save({ getOS: 'android' });
    expect(mockStore.getMockData('getOS')).not.toBe(defaultMockData['getOS']);
    mockStore.clearAll();
    expect(mockStore.getMockData('getOS')).toBe(defaultMockData['getOS']);
  });
});
