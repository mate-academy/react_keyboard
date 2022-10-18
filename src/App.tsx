import { Component } from 'react';

type State = {
  activeKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    activeKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyClick);
  }

  keyClick = (event: KeyboardEvent) => (
    this.setState({ activeKey: event.key })
  );

  render() {
    const { activeKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {activeKey
            ? `The last pressed key is [${activeKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
