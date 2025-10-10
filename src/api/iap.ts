import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

const getPlatformProducts: ActualLiff['iap']['getPlatformProducts'] = () => {
  return Promise.resolve(mockStore.getMockData('iap.getPlatformProducts'));
};
const createPayment: ActualLiff['iap']['createPayment'] = () => {
  return Promise.resolve(mockStore.getMockData('iap.createPayment'));
};
const requestConsentAgreement: ActualLiff['iap']['requestConsentAgreement'] =
  () => {
    return Promise.resolve(
      mockStore.getMockData('iap.requestConsentAgreement')
    );
  };
export const iap = {
  getPlatformProducts,
  createPayment,
  requestConsentAgreement,
};
