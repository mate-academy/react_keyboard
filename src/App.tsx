import { Component } from 'react';

interface AppState {
  textInfo: string;
  key: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      textInfo: 'Nothing was pressed yet',
      key: 'Nothing was pressed yet',
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleKeyUp = (event: { key: any; }) => {
    this.setState({ key: event.key });
  };

  render() {
    const { textInfo, key } = this.state;

    return (
      <div className="App">
        {key === textInfo ? (
          <p className="App__message">{key}</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${key}]`}</p>
        )}
      </div>
    );
  }
}

export default App;
