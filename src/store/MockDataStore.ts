import { ActualLiff } from '../type';
import { defaultMockData } from './defaultValue';

type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LiffApiResponse<T extends (...args: any[]) => any> = Await<ReturnType<T>>;

export type TargetApi = {
  init: ActualLiff['init'];
  getOS: ActualLiff['getOS'];
  getLanguage: ActualLiff['getLanguage'];
  getVersion: ActualLiff['getVersion'];
  getLineVersion: ActualLiff['getLineVersion'];
  isInClient: ActualLiff['isInClient'];
  isLoggedIn: ActualLiff['isLoggedIn'];
  isApiAvailable: ActualLiff['isApiAvailable'];
  login: ActualLiff['login'];
  logout: ActualLiff['logout'];
  getAccessToken: ActualLiff['getAccessToken'];
  getIDToken: ActualLiff['getIDToken'];
  getDecodedIDToken: ActualLiff['getDecodedIDToken'];
  getContext: ActualLiff['getContext'];
  getProfile: ActualLiff['getProfile'];
  getFriendship: ActualLiff['getFriendship'];
  'permanentLink.createUrl': ActualLiff['permanentLink']['createUrl'];
  'permanentLink.createUrlBy': ActualLiff['permanentLink']['createUrlBy'];
  'permanentLink.setExtraQueryParam': ActualLiff['permanentLink']['setExtraQueryParam'];
  sendMessages: ActualLiff['sendMessages'];
  openWindow: ActualLiff['openWindow'];
  shareTargetPicker: ActualLiff['shareTargetPicker'];
  scanCode: NonNullable<ActualLiff['scanCode']>;
  closeWindow: ActualLiff['closeWindow'];
  initPlugins: NonNullable<ActualLiff['initPlugins']>;
  // private
  getAId: ActualLiff['getAId'];
  getProfilePlus: ActualLiff['getProfilePlus'];
  getIsVideoAutoPlay: ActualLiff['getIsVideoAutoPlay'];
  'subWindow.on': ActualLiff['subWindow']['on'];
  'subWindow.off': ActualLiff['subWindow']['off'];
  'subWindow.open': ActualLiff['subWindow']['open'];
  'subWindow.cancel': ActualLiff['subWindow']['cancel'];
  'subWindow.submit': ActualLiff['subWindow']['submit'];
  'subWindow.close': ActualLiff['subWindow']['close'];
  'subWindow.getAppData': ActualLiff['subWindow']['getAppData'];
  isSubWindow: ActualLiff['isSubWindow'];
  'permission.query': ActualLiff['permission']['query'];
  'permission.requestAll': ActualLiff['permission']['requestAll'];
  'i18n.setLang': ActualLiff['i18n']['setLang'];
  _dispatchEvent: ActualLiff['_dispatchEvent'];
  _call: ActualLiff['_call'];
  _addListener: ActualLiff['_addListener'];
  _removeListener: ActualLiff['_removeListener'];
  _postMessage: ActualLiff['_postMessage'];
};

export type MockData = {
  [key in keyof TargetApi]: LiffApiResponse<TargetApi[key]> extends void
    ? undefined
    : LiffApiResponse<TargetApi[key]>;
};

class MockDataStore {
  constructor(private _data = defaultMockData) {}

  save(
    d: Partial<MockData> | ((prev: Partial<MockData>) => Partial<MockData>)
  ): void {
    const data = typeof d === 'function' ? d(this._data) : d;
    if (this.validate(data)) {
      this._data = data;
    } else {
      console.error('invalid data', data);
    }
  }

  clearAll(): void {
    this._data = defaultMockData;
  }

  getMockData<T extends keyof TargetApi>(key: T): MockData[T] {
    const d = this._data[key];
    return d;
  }

  private validate(data: unknown): data is MockData {
    // WIP
    return true;
  }
}

export const mockStore = new MockDataStore();
