import { Component } from 'react';

type State = {
  activeKey: string | undefined;
};

export class App extends Component {
  state: State = {
    activeKey: undefined,
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
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.activeKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.activeKey}]`}
        </p>
      </div>
    );
  }
}
