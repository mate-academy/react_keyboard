import { Component } from 'react';

type StateType = {
  pressedKey: string | null;
};

export class App extends Component {
  state: StateType = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? <span>The last pressed key is [{pressedKey}]A</span>
          : <span>Nothing was pressed yet</span>
        }
      </div>
    );
  }
}
