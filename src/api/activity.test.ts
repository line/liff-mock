import { activity } from './activity';
import { mocked } from 'jest-mock';
import { mockStore } from '../store/MockDataStore';
jest.mock('../store/MockDataStore');

const _mockStore = mocked(mockStore);

describe('activity', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getCallState', () => {
    it.each([false, true])(
      'should return isActive: %s synchronously',
      (isActive) => {
        const state = { isActive };
        _mockStore.getMockData.mockReturnValueOnce(state);

        expect(activity.getCallState()).toEqual(state);
        expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
        expect(_mockStore.getMockData).toHaveBeenCalledWith(
          'activity.getCallState'
        );
      }
    );
  });

  describe('getRecordingState', () => {
    it.each([false, true])(
      'should return isActive: %s synchronously',
      (isActive) => {
        const state = { isActive };
        _mockStore.getMockData.mockReturnValueOnce(state);

        expect(activity.getRecordingState()).toEqual(state);
        expect(_mockStore.getMockData).toHaveBeenCalledTimes(1);
        expect(_mockStore.getMockData).toHaveBeenCalledWith(
          'activity.getRecordingState'
        );
      }
    );
  });
});
