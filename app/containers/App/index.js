import React from 'react';

import Header from 'components/Header';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
