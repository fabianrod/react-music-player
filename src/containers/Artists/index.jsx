import { connect } from 'react-redux';
import { fetchArtistsRequest } from '../../redux/actions/artists';
import Artists from '../../components/Artists'

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtistsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);