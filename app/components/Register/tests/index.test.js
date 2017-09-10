import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Register from '../index';
import messages from '../messages';


describe('<Register />', () => {
  it('renders according to design', () => {
    const component = renderer.create(
      <IntlProvider locale="en">
        <Register />
      </IntlProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the page title', () => {
    const renderedComponent = shallow(
      <Register />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });

  it('should contain 5 FormLines', () => {
    const renderedComponent = shallow(
      <Register />
    );
    const formLines = renderedComponent.find('FormLine');

    expect(formLines.length).toEqual(5);
  });
});
