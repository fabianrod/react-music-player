import { connect } from 'react-redux';
import { fetchSongsRequest } from '../../redux/actions/songs';
import Songs from '../../components/Songs';

const mapStateToProps = (state) => ({
  songs: state.songs,
});

const mapDispatchToProps = (dispatch) => ({
  getSongs: (id) => dispatch(fetchSongsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
