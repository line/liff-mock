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

  it('should call createMockedInit and getActualInitOrMockedInit, and then replace liff.init', () => {
    const init = jest.fn();
    const mockedInit = jest.fn();
    _createMockedInit.mockImplementation(() => mockedInit);
    _getActualInitOrMockedInit.mockImplementation(() => mockedInit);

    const liff = { id: 'id', init } as unknown as ActualLiff;

    const module = new LiffMockPlugin();
    module.install({ liff, hooks: {} as any });

    expect(_createMockedInit).toBeCalledTimes(1);
    expect(_getActualInitOrMockedInit).toBeCalledTimes(1);
    expect(_getActualInitOrMockedInit).toBeCalledWith(init, mockedInit);
    expect(liff.id).toBe('id'); // preserved
    expect(liff.init).toBe(mockedInit); // replaced
  });

  it('should return module APIs, `set` and `clear`', () => {
    const liff = {} as unknown as ActualLiff;

    const module = new LiffMockPlugin();
    const res = module.install({ liff, hooks: {} as any });

    expect(res.set).toBeDefined();
    expect(res.clear).toBeDefined();
  });
});
