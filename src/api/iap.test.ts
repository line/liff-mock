import { iap } from './iap';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('iap', () => {
  beforeEach(() => {
    _mockStore.getMockData.mockClear();
  });

  it('should call mockStore.getMockData for getPlatformProducts', async () => {
    await iap.getPlatformProducts({ productIds: ['test-product'] });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith(
      'iap.getPlatformProducts'
    );
  });

  it('should call mockStore.getMockData for createPayment', async () => {
    await iap.createPayment({
      productId: 'test-product',
      orderId: 'test-order',
    });
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith('iap.createPayment');
  });

  it('should call mockStore.getMockData for requestConsentAgreement', async () => {
    await iap.requestConsentAgreement();
    expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
    expect(_mockStore.getMockData).toHaveBeenCalledWith(
      'iap.requestConsentAgreement'
    );
  });
});
