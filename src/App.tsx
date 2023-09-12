import React from 'react';

type State = {
  pressKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  private handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      pressKey: event.key,
    });
  };

  render() {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressKey
            ? (`The last pressed key is [${pressKey}]`)
            : ('Nothing was pressed yet')
          }
        </p>
      </div>
    );
  }
}
