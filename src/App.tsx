import { Component } from 'react';

type State = {
  selectedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    selectedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (event: KeyboardEvent) => {
    this.setState({ selectedKey: event.key });
  };

  render() {
    const currentKey = this.state.selectedKey;

    return (
      <div className="App">
        <p className="App__message">
          {
            (currentKey === null)
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${currentKey}]`
          }
        </p>
      </div>
    );
  }
}
