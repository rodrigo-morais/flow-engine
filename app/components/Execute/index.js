import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Button from 'components/shared/Button';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Execute = ({ rules, next, onCleanPreviousExecution, onAddExecution, finished }) => {
  const lines = [
    {
      name: 'object',
      labelText: <FormattedMessage {...messages.form.object} />,
      inputType: 'textArea',
    },
  ];
  const formLines = () => lines.map((line, index) =>
    <FormLine
      key={index}
      name={line.name}
      labelText={line.labelText}
      inputType={line.inputType}
    />);

  const executeBody = (body, obj) => {
    try {
      const result = body.call(undefined, obj);
      return !!result;
    } catch (e) {
      return false;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const obj = event.target.querySelector('textarea').value;
    const rule = next ? rules.find((r) => r.id === next) : rules.shift();

    if (rule) {
      const result = executeBody(rule.body, obj);

      onAddExecution(rule, result ? rule.passed : rule.failed);
    }
  };

  if (!next || finished) {
    onCleanPreviousExecution();
  }

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={onSubmit}>
        {formLines()}
        <Button type="submit">
          <FormattedMessage {...messages.form.submit} />
        </Button>
      </Form>
    </div>
  );
};

Execute.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      passed: PropTypes.string,
      failed: PropTypes.string,
    })
  ).isRequired,
  next: PropTypes.string,
  onCleanPreviousExecution: PropTypes.func.isRequired,
  onAddExecution: PropTypes.func.isRequired,
  finished: PropTypes.bool.isRequired,
};

export default Execute;
