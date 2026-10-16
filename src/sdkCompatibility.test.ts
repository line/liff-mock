import liff from '@line/liff';
import { ERROR_MESSAGE } from './const';
import { LiffMockPlugin } from './plugin';
import { globalStore } from './store/GlobalStore';
import { mockStore } from './store/MockDataStore';
import { LiffMock } from './type';

const mockedLiff = liff as LiffMock;

describe('LIFF SDK mock compatibility', () => {
  beforeAll(() => {
    liff.use(new LiffMockPlugin());
  });

  beforeEach(async () => {
    globalStore.resetAll();
    mockStore.clearAll();
    await mockedLiff.init({ liffId: 'test', mock: true });
  });

  afterEach(() => {
    globalStore.resetAll();
    mockStore.clearAll();
  });

  it('provides synchronous activity state defaults after mock initialization', () => {
    expect(liff.activity.getCallState()).toEqual({ isActive: false });
    expect(liff.activity.getRecordingState()).toEqual({ isActive: false });
  });

  it('returns configured activity states and restores defaults when cleared', () => {
    mockedLiff.$mock.set({
      'activity.getCallState': { isActive: true },
      'activity.getRecordingState': { isActive: false },
    });

    expect(liff.activity.getCallState()).toEqual({ isActive: true });
    expect(liff.activity.getRecordingState()).toEqual({ isActive: false });

    mockedLiff.$mock.set({
      'activity.getCallState': { isActive: false },
      'activity.getRecordingState': { isActive: true },
    });
    expect(liff.activity.getCallState()).toEqual({ isActive: false });
    expect(liff.activity.getRecordingState()).toEqual({ isActive: true });

    mockedLiff.$mock.clear();
    expect(liff.activity.getCallState()).toEqual({ isActive: false });
    expect(liff.activity.getRecordingState()).toEqual({ isActive: false });
  });

  it('provides asynchronous calendar defaults after mock initialization', async () => {
    await expect(
      liff.calendar.getEvents({
        startTime: new Date('2026-10-16T00:00:00Z'),
        endTime: new Date('2026-10-17T00:00:00Z'),
      })
    ).resolves.toEqual({
      events: [],
      isThirdPartyCalendarAccessGranted: false,
    });
    await expect(
      liff.calendar.showEventCreationModal()
    ).resolves.toBeUndefined();
  });

  it('returns configured calendar events and restores defaults when cleared', async () => {
    const startTime = new Date('2026-10-16T00:00:00Z');
    const endTime = new Date('2026-10-17T00:00:00Z');
    const result = {
      events: [{ title: 'Test event', startTime, endTime, isAllDay: true }],
      isThirdPartyCalendarAccessGranted: true,
    };
    mockedLiff.$mock.set({ 'calendar.getEvents': result });

    await expect(
      liff.calendar.getEvents({ startTime, endTime })
    ).resolves.toEqual(result);

    mockedLiff.$mock.clear();
    await expect(
      liff.calendar.getEvents({ startTime, endTime })
    ).resolves.toEqual({
      events: [],
      isThirdPartyCalendarAccessGranted: false,
    });
  });

  it('requires initialization and login before requesting friendship', () => {
    globalStore.resetAll();
    expect(() => liff.requestFriendship()).toThrow(ERROR_MESSAGE.REQUIRE_INIT);

    globalStore.initIsCalled();
    expect(() => liff.requestFriendship()).toThrow(ERROR_MESSAGE.REQUIRE_LOGIN);
  });

  it('resolves friendship requests without invoking the native API', async () => {
    liff.login();
    await expect(
      liff.requestFriendship({ officialAccount: { id: 'test-account' } })
    ).resolves.toBeUndefined();
  });
});
