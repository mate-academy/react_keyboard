import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (this.getPressedKey));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (this.getPressedKey));
  }

  getPressedKey = (event: KeyboardEvent): void => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            lastPressedKey
              ? `The last pressed key is [${lastPressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
