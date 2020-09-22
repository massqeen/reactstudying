import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = { initialState: 0, step: 1 };
  static propTypes = { initialState: PropTypes.number, step: PropTypes.number };
  state = {
    value: this.props.initialState,
  };

  increment = () => {
    this.setState((previousState) => ({
      value: previousState.value + this.props.step,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      value: previousState.value - this.props.step,
    }));
  };

  render() {
    const value = this.state.value;

    return (
      <div>
        <button onClick={this.decrement}>Decrease</button>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>{value}</span>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default Counter;
