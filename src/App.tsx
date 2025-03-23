import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;
    let content;

    if (pressedKey === null) {
      content = <p className="App__message">Nothing was pressed yet</p>;
    } else {
      content = (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      );
    }

    return <div className="App">{content}</div>;
  }
}
