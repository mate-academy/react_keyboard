import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState(prevState => {
      return {
        ...prevState,
        pressedKey: event.key,
      };
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? (`The last pressed key is [${pressedKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
