import React from 'react';

type AppProps = {
  pressedKey: string;
};

export class App extends React.Component {
  state: AppProps = {
    pressedKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    if (!pressedKey) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      </div>
    );
  }
}
