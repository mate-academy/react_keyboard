import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onClick);
  }

  onClick = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${e.key}]`,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
