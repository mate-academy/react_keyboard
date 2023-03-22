import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: 'key',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.componentDidMount);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === 'key' ? (
            'Nothing was pressed yet'
          ) : (
            `The last pressed key is [${this.state.pressedKey}]`
          )}
        </p>
      </div>
    );
  }
}
