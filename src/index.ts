import { LiffMockApi, ExtendedInit } from './type';
export { LiffMockConfig, LiffMockApi, ExtendedInit } from './type';
import { LiffMockPlugin } from './plugin';
export { LiffMockPlugin } from './plugin';
export default LiffMockPlugin;

// For @line/liff v2.21.4 or earlier
declare module '@line/liff' {
  interface Liff {
    init: ExtendedInit;
    $mock: LiffMockApi;
  }
}

// For @line/liff v2.22.0 or later
declare module '@line/liff/exports' {
  interface Liff {
    init: ExtendedInit;
    $mock: LiffMockApi;
  }
}
