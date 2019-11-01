/* eslint-disable */
import { fetchArtistsSucceed } from '../../../redux/actions/artists';
import Types from '../../../redux/types/artists';

describe('artists actions', () => {
  it('should create an action when fetching is succeed', () => {
    const payload = {
      data: [
        { id: 1, name: "Arctic Monkeys" },
      ]
    };
    const expectedAction = {
      type: Types.FETCH_ARTISTS_SUCCEED,
      payload,
    };
    expect(fetchArtistsSucceed(payload)).toEqual(expectedAction);
  });
});
