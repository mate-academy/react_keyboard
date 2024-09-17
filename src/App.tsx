import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.componentDidMount);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
