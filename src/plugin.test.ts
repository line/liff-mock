import { mocked } from 'jest-mock';
import { createMockedInit } from './api/init';
import { LiffMockPlugin } from './plugin';
import { getActualInitOrMockedInit } from './shared';
import { ActualLiff } from './type';

jest.mock('./api/init');
jest.mock('./shared');
const _createMockedInit = mocked(createMockedInit);
const _getActualInitOrMockedInit = mocked(getActualInitOrMockedInit);

describe('LiffMockPlugin', () => {
  it('should be named mock', () => {
    expect(new LiffMockPlugin().name).toBe('mock');
  });

  it('should replace liff.init with mocked one', () => {
    const init = jest.fn();
    const isInClient = jest.fn().mockImplementation(() => false);
    const mockedInit = jest.fn();
    _createMockedInit.mockImplementation(() => mockedInit);
    _getActualInitOrMockedInit.mockImplementation(() => mockedInit);

    const liff = { id: 'id', init, isInClient } as unknown as ActualLiff;

    const module = new LiffMockPlugin();
    module.install({ liff, hooks: {} as any });

    expect(_createMockedInit).toHaveBeenCalledTimes(1);
    expect(_getActualInitOrMockedInit).toHaveBeenCalledTimes(1);
    expect(_getActualInitOrMockedInit).toHaveBeenCalledWith(init, mockedInit);
    expect(isInClient).toHaveBeenCalledTimes(1);
    expect(liff.id).toBe('id'); // preserved
    expect(liff.init).toBe(mockedInit); // replaced
  });

  it('should return module APIs, `set` and `clear`', () => {
    const isInClient = jest.fn().mockImplementation(() => false);
    const liff = { isInClient } as unknown as ActualLiff;

    const module = new LiffMockPlugin();
    const res = module.install({ liff, hooks: {} as any });

    expect(res.set).toBeDefined();
    expect(res.clear).toBeDefined();
  });
});
