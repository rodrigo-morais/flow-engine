import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Execute from 'components/Execute';

export class ExecutePage extends React.Component {
  constructor(props) {
    super(props);

    this.onCleanPreviousExecution = this.onCleanPreviousExecution.bind(this);
    this.onAddExecution = this.onAddExecution.bind(this);

    this.state = { next: null, flow: [], finished: false };
  }

  onCleanPreviousExecution() {
    console.log('clean');
  }

  onAddExecution(rule, next) {
    const ruleState = rule.passed === next ? 'passed' : 'failed';
    const item = `Rule ${rule.id} ${ruleState}`;
    this.setState({ flow: [...this.state.flow, item], next, finished: !next });
  }

  render() {
    return (
      <Execute
        rules={this.props.rules}
        next={this.state.next}
        onCleanPreviousExecution={this.onCleanPreviousExecution}
        onAddExecution={this.onAddExecution}
        flow={this.state.flow}
        finished={this.state.finished}
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
