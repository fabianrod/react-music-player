/* eslint-disable */
import getAllArtists from '../../api/artists.api';

describe('artists.api', () => {
  it('should return data', async () => {
    const data = await getAllArtists();
    expect(data).toBeDefined();
    expect(data[0].id).toBe(1);
    expect(data[0].name).toBe('Arctic Monkeys');
  });
});
