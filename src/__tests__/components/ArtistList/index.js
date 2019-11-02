import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from '../../../components/ArtistList';
import '../../../../setupTests';

let wrapper;

describe('<ArtistList />', () => {
  beforeAll(() => {
    let mockItems = [
      { id: 1, name: 'Artic Monkeys', image: 'https://test.image.com' },
      { id: 2, name: 'Nirvana', image: 'https://test.image.com' },
      { id: 3, name: 'Diomedez Diaz', image: 'https://test.image.com' },
    ];
    wrapper = shallow(<ArtistList data={mockItems} />);
  });

  it('rendering without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  it('should render at least image covers and artists name', () => {
    expect(wrapper.find('.item-artist__cover')).toHaveLength(3);
    expect(wrapper.find('.item-artist__name')).toHaveLength(3);
  });
});