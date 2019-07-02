import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foo: 'bar',
  //   };
  // }

  handleChange = () => {
    // this.setState({ foo: Math.random() });
  };

  render() {
    return <div onClick={this.handleChange}>{this.props.foo}</div>;
  }
}

const mapStoreToPropsAsState = (state) => ({
  foo: 'bar',
});

export default connect(mapStoreToPropsAsState)(App);
