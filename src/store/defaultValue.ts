import { MockData } from './MockDataStore';
import { Context } from '@liff/store';

const mockContext: Context = {
  type: 'group',
  groupId: 'group_id',
  endpointUrl: 'https://line.me',
  viewType: 'full',
  availability: {
    shareTargetPicker: {
      permission: true,
      minVer: '10.3.0',
    },
    multipleLiffTransition: {
      permission: true,
      minVer: '10.18.0',
    },
    subwindowOpen: {
      permission: true,
      minVer: '11.7.0',
    },
    scanCode: {
      permission: true,
      minVer: '9.4.0',
      unsupportedFromVer: '9.19.0',
    },
    scanCodeV2: {
      permission: true,
      minVer: '11.7.0',
      minOsVer: '14.3.0',
    },
    getAdvertisingId: {
      permission: false,
      minVer: '7.14.0',
    },
    addToHomeScreen: {
      permission: false,
      minVer: '9.16.0',
    },
    bluetoothLeFunction: {
      permission: false,
      minVer: '9.14.0',
      unsupportedFromVer: '9.19.0',
    },
    skipChannelVerificationScreen: {
      permission: false,
      minVer: '11.14.0',
    },
  },
  scope: ['chat_message.write', 'openid', 'profile'],
};

export const defaultMockData: MockData = {
  init: undefined,
  getOS: 'web',
  getLanguage: 'en-US',
  getVersion: '2.19.0',
  getLineVersion: null,
  isInClient: false,
  isLoggedIn: false,
  isApiAvailable: false,
  login: undefined,
  logout: undefined,
  getAccessToken: 'access_token',
  getIDToken: 'id_token',
  getDecodedIDToken: {},
  getContext: mockContext,
  getProfile: {
    displayName: 'Brown',
    userId: '123456789',
    statusMessage: 'hello',
  },
  getFriendship: {
    friendFlag: false,
  },
  'permanentLink.createUrl': 'https://line.me',
  'permanentLink.createUrlBy': 'https://line.me',
  'permanentLink.setExtraQueryParam': undefined,
  sendMessages: undefined,
  openWindow: undefined,
  shareTargetPicker: undefined,
  scanCode: { value: 'https://line.me' },
  closeWindow: undefined,
  initPlugins: [],
  // private
  getAId: undefined,
  getProfilePlus: undefined,
  getIsVideoAutoPlay: false,
  'subWindow.on': undefined,
  'subWindow.off': undefined,
  'subWindow.open': undefined,
  'subWindow.cancel': { status: 'cancel', result: '' },
  'subWindow.submit': { status: 'submit', result: '' },
  'subWindow.close': undefined,
  'subWindow.getAppData': {},
  isSubWindow: false,
  'permission.query': { state: 'unavailable' },
  'permission.requestAll': undefined,
  'i18n.setLang': undefined,
  _dispatchEvent: undefined,
  _call: undefined,
  _addListener: undefined,
  _removeListener: undefined,
  _postMessage: undefined,
};
