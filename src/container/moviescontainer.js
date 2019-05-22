import { connect } from 'react-redux'
import Movies from '../component/movies'
import { getData } from '../actions';

const mapStateToProps = (state) => {
    return {
        store: state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Movies);