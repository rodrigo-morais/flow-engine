import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ExecutePage from '../index';
import messages from '../messages';

describe('<ExecutePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <ExecutePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
