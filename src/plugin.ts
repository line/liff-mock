import { createMockedInit } from './api/init';
import { getActualInitOrMockedInit } from './shared';
import { set } from './api/set';
import { clear } from './api/clear';
import { LiffMockApi } from './type';
import { LiffPlugin, LiffPluginContext } from '@line/liff';

export class LiffMockPlugin implements LiffPlugin<LiffMockApi> {
  name = 'mock';

  install({ liff }: LiffPluginContext): LiffMockApi {
    const originalInit = liff.init;
    const mockedInit = createMockedInit((mockedLiff) => {
      Object.entries(mockedLiff).forEach(([key, value]) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (liff as any)[key] = value;
      });
    });
    liff.init = getActualInitOrMockedInit(originalInit, mockedInit);

    return {
      set,
      clear,
    };
  }
}
