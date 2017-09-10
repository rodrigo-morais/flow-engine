import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Register = () => {
  const lines = [
    {
      name: 'title',
      labelText: <FormattedMessage {...messages.form.title} />,
      inputType: 'text',
    },
    {
      name: 'id',
      labelText: <FormattedMessage {...messages.form.id} />,
      inputType: 'text',
    },
    {
      name: 'body',
      labelText: <FormattedMessage {...messages.form.body} />,
      inputType: 'textArea',
    },
    {
      name: 'passed',
      labelText: <FormattedMessage {...messages.form.passed} />,
      inputType: 'text',
    },
    {
      name: 'failed',
      labelText: <FormattedMessage {...messages.form.failed} />,
      inputType: 'text',
    },
  ];
  const formLines = () => lines.map((line, index) =>
    <FormLine
      key={index}
      name={line.name}
      labelText={line.labelText}
      inputType={line.inputType}
    />);
  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form>
        {formLines()}
      </Form>
    </div>
  );
};

export default Register;
