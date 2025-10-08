import { createMockedInit } from './init';
import { globalStore } from '../store/GlobalStore';

describe('mockedInit', () => {
  beforeEach(() => {
    globalStore.resetAll();
  });

  it('should call injectLiffMock', async () => {
    const injectLiffMock = jest.fn();
    const isInClient = false;
    const mockedInit = createMockedInit(injectLiffMock, isInClient);
    await mockedInit({ liffId: 'xx' });
    expect(injectLiffMock).toHaveBeenCalledTimes(1);
    expect(globalStore.numberOfInitCalled).toBe(1);
    expect(globalStore.numberOfLoginCalled).toBe(0);
  });

  it('should call liff.login when in LIFF Browser', async () => {
    const injectLiffMock = jest.fn();
    // In LIFF Browser
    const isInClient = true;
    const mockedInit = createMockedInit(injectLiffMock, isInClient);
    await mockedInit({ liffId: 'xx' });
    expect(injectLiffMock).toHaveBeenCalledTimes(1);
    expect(globalStore.numberOfInitCalled).toBe(1);
    expect(globalStore.numberOfLoginCalled).toBe(1);
  });

  it('should not call injectLiffMock and liff.login if liff.init is already called', async () => {
    const injectLiffMock = jest.fn();
    const isInClient = true;
    const mockedInit = createMockedInit(injectLiffMock, isInClient);
    await mockedInit({ liffId: 'xx' });
    expect(injectLiffMock).toHaveBeenCalledTimes(1);
    expect(globalStore.numberOfLoginCalled).toBe(1);
    await mockedInit({ liffId: 'xx' });
    expect(injectLiffMock).toHaveBeenCalledTimes(1);
    expect(globalStore.numberOfLoginCalled).toBe(1);
  });
});
