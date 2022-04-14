import liff from '@line/liff';
import { Config } from '@liff/types';
import { MockData } from './store/MockDataStore';

export type ActualLiff = typeof liff;

export type LiffMockConfig = {
  mock?: boolean;
};

export type ExtendedConfig = Config & LiffMockConfig;

export type ExtendedInit<T = ActualLiff['init']> = T extends (
  config: Config,
  ...args: infer U2
) => infer U3
  ? (config: ExtendedConfig, ...args: U2) => U3
  : never;

export type LiffMockApi = {
  set: (
    data: Partial<MockData> | ((prev: Partial<MockData>) => Partial<MockData>)
  ) => void;
  clear: () => void;
};

export type LiffMock = {
  init: ExtendedInit;
  $mock: LiffMockApi;
} & Omit<ActualLiff, 'init'>;

declare global {
  interface Window {
    liff: ActualLiff | undefined;
  }
}
