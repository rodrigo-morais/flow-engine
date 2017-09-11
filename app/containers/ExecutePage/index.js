import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Execute from 'components/Execute';

export class ExecutePage extends React.Component {
  constructor(props) {
    super(props);

    this.onAddExecution = this.onAddExecution.bind(this);

    this.state = { flow: [] };
  }

  onAddExecution(flow) {
    this.setState({ flow });
  }

  render() {
    return (
      <Execute
        rules={this.props.rules}
        onAddExecution={this.onAddExecution}
        flow={this.state.flow}
      />
    );
  }
}

ExecutePage.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      passed: PropTypes.string,
      failed: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  rules: state.get('rules'),
});

export default connect(mapStateToProps)(ExecutePage);
