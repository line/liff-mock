import { globalStore } from '../store/GlobalStore';
import { ActualLiff } from '../type';
import { closeWindow } from './closeWindow';
import { getAccessToken } from './getAccessToken';
import { getAId } from './getAId';
import { getContext } from './getContext';
import { getDecodedIDToken } from './getDecodedIDToken';
import { getFriendship } from './getFriendship';
import { getIDToken } from './getIDToken';
import { getIsVideoAutoPlay } from './getIsVideoAutoPlay';
import { getLanguage } from './getLanguage';
import { getLineVersion } from './getLineVersion';
import { getOS } from './getOS';
import { getProfile } from './getProfile';
import { getProfilePlus } from './getProfilePlus';
import { getVersion } from './getVersion';
import { i18n_setLang } from './i18n_setLang';
import { initPlugins } from './initPlugins';
import { isApiAvailable } from './isApiAvailable';
import { isInClient } from './isInClient';
import { isLoggedIn } from './isLoggedIn';
import { isSubWindow } from './isSubWindow';
import { login } from './login';
import { logout } from './logout';
import { openWindow } from './openWindow';
import { permanentLink_createUrl } from './permanentLink_createUrl';
import { permanentLink_createUrlBy } from './permanentLink_createUrlBy';
import { permanentLink_setExtraQueryParam } from './permanentLink_setExtraQueryParam';
import { permission } from './permission';
import { scanCode } from './scanCode';
import { sendMessages } from './sendMessages';
import { shareTargetPicker } from './shareTargetPicker';
import { subWindow } from './subWindow';
import { _addListener } from './_addListener';
import { _call } from './_call';
import { _dispatchEvent } from './_dispatchEvent';
import { _postMessage } from './_postMessage';
import { _removeListener } from './_removeListener';

export const createMockedInit = (
  injectLiffMock: (
    liff: Omit<ActualLiff, 'init' | 'use' | 'ready' | 'id' | '$mock'>
  ) => void,
  isCalledInLiffBrowser: boolean
): ActualLiff['init'] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const init: ActualLiff['init'] = (config, successCallback, errorCallback) => {
    if (!globalStore.isInitCalled) {
      injectLiffMock({
        getLanguage,
        getOS,
        getVersion,
        getLineVersion,
        isApiAvailable,
        isInClient,
        isLoggedIn,
        login,
        logout,
        getAccessToken,
        getIDToken,
        getDecodedIDToken,
        getContext,
        getProfile,
        getFriendship,
        permanentLink: {
          createUrl: permanentLink_createUrl,
          createUrlBy: permanentLink_createUrlBy,
          setExtraQueryParam: permanentLink_setExtraQueryParam,
        },
        sendMessages,
        openWindow,
        shareTargetPicker,
        scanCode,
        scanCodeV2: scanCode,
        closeWindow,
        initPlugins,
        i18n: {
          setLang: i18n_setLang,
        },
        // private
        getAId,
        getProfilePlus,
        getIsVideoAutoPlay,
        subWindow,
        isSubWindow,
        permission,
        _dispatchEvent,
        _call,
        _addListener,
        _removeListener,
        _postMessage,
      });
    }

    globalStore.initIsCalled();

    // Login automatically if LIFF app is running in LIFF browser
    // https://developers.line.biz/en/reference/liff/#login
    if (isCalledInLiffBrowser && globalStore.numberOfLoginCalled === 0) {
      login();
    }

    if (typeof successCallback === 'function') {
      successCallback();
    }
    return Promise.resolve();
  };

  return init;
};
