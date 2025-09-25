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
    expect(actualInit).toHaveBeenCalledTimes(1);
    expect(actualInit).toHaveBeenCalledWith(
      { liffId: 'id' },
      undefined,
      undefined
    );
    expect(mockedInit).toHaveBeenCalledTimes(0);
  });
  it('should return the actual init if config.mock is false', () => {
    const init = getActualInitOrMockedInit(actualInit, mockedInit);
    init({ liffId: 'id', mock: false });
    expect(actualInit).toHaveBeenCalledTimes(1);
    expect(actualInit).toHaveBeenCalledWith(
      { liffId: 'id', mock: false },
      undefined,
      undefined
    );
    expect(mockedInit).toHaveBeenCalledTimes(0);
  });

  it('should return the mocked init if config.mock is true', () => {
    const init = getActualInitOrMockedInit(actualInit, mockedInit);
    init({ liffId: 'id', mock: true });
    expect(actualInit).toHaveBeenCalledTimes(0);
    expect(mockedInit).toHaveBeenCalledTimes(1);
    expect(mockedInit).toHaveBeenCalledWith(
      { liffId: 'id', mock: true },
      undefined,
      undefined
    );
  });
});
