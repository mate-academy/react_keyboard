import React from 'react';
import { Keyboard } from './keyboard';

interface State{
  isVisible: boolean
}

export class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
  };

  switcher = () => {
    return this.state.isVisible
      ? this.setState({ isVisible: false })
      : this.setState({ isVisible: true });
  };

  render() {
    return (
      <>
        {this.state.isVisible && (
          <Keyboard />
        )}
        <button
          type="button"
          onClick={this.switcher}
        >
          Switch
        </button>
      </>
    );
  }
}
