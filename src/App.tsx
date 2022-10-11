import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const {
      pressedKey: key,
    } = this.state;

    return (
      <div className="App">
        {key
          ? <p className="App__message">{`The last pressed key is [${key}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
