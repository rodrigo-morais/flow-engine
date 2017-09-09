import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/shared/H1';
import Description from './Description';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
      </div>
    );
  }
}
