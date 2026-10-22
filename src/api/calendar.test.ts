import { calendar } from './calendar';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('calendar', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getEvents', () => {
    it('should resolve with the configured calendar events', async () => {
      const startTime = new Date('2026-10-16T00:00:00Z');
      const endTime = new Date('2026-10-17T00:00:00Z');
      const result = {
        events: [{ title: 'Test event', startTime, endTime, isAllDay: true }],
        isThirdPartyCalendarAccessGranted: true,
      };
      _mockStore.getMockData.mockReturnValueOnce(result);

      await expect(calendar.getEvents({ startTime, endTime })).resolves.toEqual(
        result
      );
      expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
      expect(_mockStore.getMockData).toHaveBeenCalledWith('calendar.getEvents');
    });
  });

  describe('showEventCreationModal', () => {
    it('should resolve with the configured mock data', async () => {
      _mockStore.getMockData.mockReturnValueOnce(undefined);

      await expect(calendar.showEventCreationModal()).resolves.toBeUndefined();
      expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
      expect(_mockStore.getMockData).toHaveBeenCalledWith(
        'calendar.showEventCreationModal'
      );
    });
  });
});
