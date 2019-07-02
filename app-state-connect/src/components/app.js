import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

class App extends React.Component {

  render() {
    const { changer } = this.props;
    return (
      <div onClick={changer}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStoreToPropsAsState = (state) => ({
  stuff: state.someStuff,
});

const mapDispatchToProps = (dispatch) => ({
  changer: (payload) => dispatch(actions.changer(payload)),
});

export default connect(
  mapStoreToPropsAsState,
  mapDispatchToProps
)(App);
