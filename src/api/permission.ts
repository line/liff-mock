import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

const query: ActualLiff['permission']['query'] = () => {
  return Promise.resolve(mockStore.getMockData('permission.query'));
};

const requestAll: ActualLiff['permission']['requestAll'] = () => {
  return Promise.resolve(mockStore.getMockData('permission.requestAll'));
};

const getGrantedAll: ActualLiff['permission']['getGrantedAll'] = () => {
  return Promise.resolve(mockStore.getMockData('permission.getGrantedAll'));
};

export const permission = {
  query,
  requestAll,
  getGrantedAll,
};
