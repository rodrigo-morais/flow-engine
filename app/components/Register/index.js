import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Form from 'components/Form';
import messages from './messages';

const Register = () => (
  <div>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
    <Form>
    </Form>
  </div>
);

export default Register;
