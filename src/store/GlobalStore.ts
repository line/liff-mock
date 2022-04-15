class GlobalStore {
  numberOfInitCalled = 0;
  numberOfLoginCalled = 0;

  get isInitCalled(): boolean {
    return this.numberOfInitCalled > 0;
  }
  initIsCalled() {
    this.numberOfInitCalled++;
  }

  get isLoginCalled(): boolean {
    return this.numberOfLoginCalled > 0;
  }
  loginIsCalled() {
    this.numberOfLoginCalled++;
  }

  resetAll() {
    this.numberOfInitCalled = 0;
    this.numberOfLoginCalled = 0;
  }
}

export const globalStore = new GlobalStore();
