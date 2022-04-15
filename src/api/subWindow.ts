import { mockStore } from '../store/MockDataStore';
import { ActualLiff } from '../type';

const on: ActualLiff['subWindow']['on'] = () => {
  return mockStore.getMockData('subWindow.on');
};

const off: ActualLiff['subWindow']['off'] = () => {
  return mockStore.getMockData('subWindow.off');
};

const open: ActualLiff['subWindow']['open'] = () => {
  return Promise.resolve(mockStore.getMockData('subWindow.open'));
};

const cancel: ActualLiff['subWindow']['cancel'] = () => {
  return Promise.resolve(mockStore.getMockData('subWindow.cancel'));
};

const submit: ActualLiff['subWindow']['submit'] = () => {
  return Promise.resolve(mockStore.getMockData('subWindow.submit'));
};

const close: ActualLiff['subWindow']['close'] = () => {
  return Promise.resolve(mockStore.getMockData('subWindow.close'));
};

const getAppData: ActualLiff['subWindow']['getAppData'] = () => {
  return Promise.resolve(mockStore.getMockData('subWindow.getAppData'));
};

export const subWindow: ActualLiff['subWindow'] = {
  on,
  off,
  open,
  cancel,
  submit,
  close,
  getAppData,
};
