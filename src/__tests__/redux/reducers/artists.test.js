/* eslint-disable */
import artistsReducer from '../../../redux/reducers/artists';
import Types from '../../../redux/types/artists';

describe('artists reducer', () => {
  it('should return the initial state', () => {
    expect(artistsReducer(undefined, {})).toEqual({ data: [] });
  });

  it('should handle FETCH_ARTISTS_REQUEST', () => {
    const initialRequest = {
      type: Types.FETCH_ARTISTS_REQUEST,
    };
    expect(artistsReducer({ data: [] }, initialRequest)).toEqual({ data: [] });
  });

  it('should return data when fetching is succesful', () => {
    const mockPayload = [
      { id: 1, name: 'Artic Monkeys' },
    ];

    const expectedData = {
      data: [
        { id: 1, name: 'Artic Monkeys' }
      ],
    };

    const successAction = {
      type: Types.FETCH_ARTISTS_SUCCEED,
      payload: mockPayload,
    };
    
    expect(artistsReducer({}, successAction)).toEqual(expectedData)
  });
});
