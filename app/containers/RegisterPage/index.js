import { connect } from 'react-redux';

import Register from 'components/Register';
import { registerRule } from './actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterRule: (rule) =>
    dispatch(registerRule(rule)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
