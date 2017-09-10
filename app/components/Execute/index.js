import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Form from 'components/shared/Form';
import FormLine from 'components/shared/FormLine';
import messages from './messages';

const Execute = () => {
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

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Form onSubmit={onSubmit}>
        {formLines()}
        <button type="submit">Execute flow</button>
      </Form>
    </div>
  );
};

Execute.propTypes = {
};

export default Execute;
