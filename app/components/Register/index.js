/* eslint no-param-reassign: ["error", { "props": false }] */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Button from 'components/shared/Button';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Register = ({ onRegisterRule }) => {
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

  // Validation should be a library which test other things as circular calls, if is number or not to index and next rule and if the body is a funtion
  const validateRule = (form) =>
    form.title.length > 0 && form.id.length > 0 && form.body.length > 0;

  const clearForm = (form) => {
    Array.from(form.querySelectorAll('input')).forEach((item) => { item.value = ''; });
    Array.from(form.querySelectorAll('textarea')).forEach((item) => { item.value = ''; });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const inputs = [
      ...[].slice.call(form.querySelectorAll('input')),
      ...[].slice.call(form.querySelectorAll('textarea')),
    ];
    const rule = inputs
      .map((field) => ({ [field.name]: field.value }))
      .reduce((previous, current) => ({ ...previous, ...current }), {});

    if (validateRule(rule)) {
      onRegisterRule(rule);
    }

    clearForm(form);
  };

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

Register.propTypes = {
  onRegisterRule: PropTypes.func.isRequired,
};

export default Register;
