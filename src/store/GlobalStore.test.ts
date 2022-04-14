import { globalStore } from './GlobalStore';

describe('GlobalStore', () => {
  it('should increment numberOfInitCalled when initIsCalled() is called', () => {
    expect(globalStore.numberOfInitCalled).toBe(0);
    expect(globalStore.isInitCalled).toBe(false);
    globalStore.initIsCalled();
    expect(globalStore.numberOfInitCalled).toBe(1);
    expect(globalStore.isInitCalled).toBe(true);
  });

  it('should increment numberOfLoginCalled when loginIsCalled() is called', () => {
    expect(globalStore.numberOfLoginCalled).toBe(0);
    expect(globalStore.isLoginCalled).toBe(false);
    globalStore.loginIsCalled();
    expect(globalStore.numberOfLoginCalled).toBe(1);
    expect(globalStore.isLoginCalled).toBe(true);
  });
});
