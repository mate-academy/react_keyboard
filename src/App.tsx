import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClick);
  }

  handleClick = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            !pressedKey
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
