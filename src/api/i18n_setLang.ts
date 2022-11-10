import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

export const i18n_setLang: ActualLiff['i18n']['setLang'] = () => {
  return Promise.resolve(mockStore.getMockData('i18n.setLang'));
};
