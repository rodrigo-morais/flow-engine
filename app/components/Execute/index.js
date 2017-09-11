/* eslint no-eval: ["error", {"allowIndirect": true}] */
/* eslint-env es6 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import H2 from 'components/shared/H2';
import Ul from 'components/shared/Ul';
import Li from 'components/shared/Li';
import Button from 'components/shared/Button';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Execute = ({ rules, onAddExecution, flow }) => {
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
      const func = eval.call(null, `(${body})`);
      const result = func.call(undefined, obj);
      return !!result;
    } catch (e) {
      return false;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let newFlow = [];
    const obj = event.target.querySelector('textarea').value;
    let rule = rules[0];

    while (rule) {
      const result = executeBody(rule.body, obj);
      const next = result ? rule.passed : rule.failed;
      const ruleState = rule.passed === next ? 'passed' : 'failed';
      const item = `Rule ${rule.id} ${ruleState}`;

      rule = next.length > 0 ?
        rules.find((r) => r.id === next) :
        null;

      newFlow = [...newFlow, item];
    }

    onAddExecution(newFlow);
  };

  const result = () => (
    <div>
      <hr />
      <H2>
        <FormattedMessage {...messages.result.title} />
      </H2>
      <Ul>
        {
          flow.map((item, index) => (<Li key={index}>{item}</Li>))
        }
      </Ul>
    </div>
  );


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
      {result()}
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
  onAddExecution: PropTypes.func.isRequired,
  flow: PropTypes.array.isRequired,
};

export default Execute;
