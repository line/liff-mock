import { getActualInitOrMockedInit } from './shared';

describe('getActualInitOrMockedInit', () => {
  const actualInit = jest.fn();
  const mockedInit = jest.fn();

  beforeEach(() => {
    actualInit.mockClear();
    mockedInit.mockClear();
  });

  it('should return the actual init if config.mock is undefined', () => {
    const init = getActualInitOrMockedInit(actualInit, mockedInit);
    init({ liffId: 'id' });
    expect(actualInit).toBeCalledTimes(1);
    expect(actualInit).toBeCalledWith({ liffId: 'id' }, undefined, undefined);
    expect(mockedInit).toBeCalledTimes(0);
  });
  it('should return the actual init if config.mock is false', () => {
    const init = getActualInitOrMockedInit(actualInit, mockedInit);
    init({ liffId: 'id', mock: false });
    expect(actualInit).toBeCalledTimes(1);
    expect(actualInit).toBeCalledWith(
      { liffId: 'id', mock: false },
      undefined,
      undefined
    );
    expect(mockedInit).toBeCalledTimes(0);
  });

  it('should return the mocked init if config.mock is true', () => {
    const init = getActualInitOrMockedInit(actualInit, mockedInit);
    init({ liffId: 'id', mock: true });
    expect(actualInit).toBeCalledTimes(0);
    expect(mockedInit).toBeCalledTimes(1);
    expect(mockedInit).toBeCalledWith(
      { liffId: 'id', mock: true },
      undefined,
      undefined
    );
  });
});
