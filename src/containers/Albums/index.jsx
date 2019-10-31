import { connect } from 'react-redux';
import Albums from '../../components/Albums';
import { fetchAlbumsRequest } from '../../redux/actions/albums';

const mapStateToProps = (state) => ({
  albums: state.albums,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (id) => dispatch(fetchAlbumsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
