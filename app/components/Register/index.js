import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

const Register = () => (
  <H1>
    <FormattedMessage {...messages.header} />
  </H1>
);

export default Register;
