import { Component } from 'react';

type State = {
  selectedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    selectedKey: 'Nothing was pressed yet',
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
            (currentKey === 'Nothing was pressed yet')
              ? currentKey
              : `The last pressed key is [${currentKey}]`
          }
        </p>
      </div>
    );
  }
}
