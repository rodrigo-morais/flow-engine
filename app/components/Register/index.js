import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Register = ({ registerRule }) => {
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

  const validateRule = (form) =>
    form.title.length > 0 && form.id.length > 0 && form.body.length > 0;

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const rule = [].slice.call(form.querySelectorAll('input'))
      .map((field) => ({ [field.name]: field.value }))
      .reduce((previous, current) => ({ ...previous, ...current }), {});

    if (validateRule(rule)) {
      registerRule(rule);
    }

    form.reset();
  };

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={onSubmit}>
        {formLines()}
        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

Register.propTypes = {
  registerRule: PropTypes.func.isRequired,
};

export default Register;
