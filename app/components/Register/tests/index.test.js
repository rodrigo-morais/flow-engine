import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Register from '../index';
import messages from '../messages';


describe('<Register />', () => {
  const registerRuleMock = jest.fn();

  it('renders according to design', () => {
    const component = renderer.create(
      <IntlProvider locale="en">
        <Register
          onRegisterRule={registerRuleMock}
        />
      </IntlProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the page title', () => {
    const renderedComponent = shallow(
      <Register
        onRegisterRule={registerRuleMock}
      />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });

  it('should contain 5 FormLines', () => {
    const renderedComponent = shallow(
      <Register
        onRegisterRule={registerRuleMock}
      />
    );
    const formLines = renderedComponent.find('FormLine');

    expect(formLines.length).toEqual(5);
  });

  it('should not call registerRuleMock when the form is submit empty', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Register
          onRegisterRule={registerRuleMock}
        />
      </IntlProvider>
    );

    const form = renderedComponent.find('form');
    form.reset = jest.fn();
    form.querySelectorAll = jest.fn().mockReturnValue([
      { name: 'title', value: '' },
      { name: 'id', value: '' },
      { name: 'body', value: '' },
    ]);

    const eventFake = {
      preventDefault: jest.fn(),
      target: form,
    };
    const submitButton = renderedComponent.find('button');

    submitButton.simulate('submit', eventFake);

    expect(registerRuleMock).not.toBeCalled();
  });

  it('should call registerRuleMock when the form is submit', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Register
          onRegisterRule={registerRuleMock}
        />
      </IntlProvider>
    );

    const rule = {
      title: 'title',
      id: 'id',
      body: 'body',
    };

    const form = renderedComponent.find('form');
    form.reset = jest.fn();
    form.querySelectorAll = jest.fn().mockReturnValue([
      { name: 'title', value: 'title' },
      { name: 'id', value: 'id' },
      { name: 'body', value: 'body' },
    ]);

    const eventFake = {
      preventDefault: jest.fn(),
      target: form,
    };
    const submitButton = renderedComponent.find('button');

    submitButton.simulate('submit', eventFake);

    expect(registerRuleMock).toBeCalledWith(rule);
  });
});
