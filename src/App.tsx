import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p>
          {pressedKey
            ? (`The last pressed key is [${pressedKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
