import { Component } from 'react';

type State = {
  logKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    logKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  handleKeyClick = (event: KeyboardEvent) => {
    // console.log(event);
    this.setState({ logKey: event.key });
  };

  render() {
    const { logKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(!logKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${logKey}]`
          )}
        </p>
      </div>
    );
  }
}
