import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Register from '../index';
import messages from '../messages';

describe('<Register />', () => {
  it('should render the page title', () => {
    const renderedComponent = shallow(
      <Register />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
