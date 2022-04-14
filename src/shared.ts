import { ActualLiff, ExtendedInit, LiffMock } from './type';

export const getActualInitOrMockedInit =
  (
    actualInit: ActualLiff['init'],
    mockedInit: LiffMock['init']
  ): ExtendedInit =>
  (config, successCallback, errorCallback) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isMockMode = (config as any).mock === true;

    if (!isMockMode) {
      return actualInit(config, successCallback, errorCallback);
    }

    return mockedInit(config, successCallback, errorCallback);
  };
