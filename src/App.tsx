import { Component } from 'react';

export class App extends Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onClick);
  }

  onClick = (e: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${e.key}]`,
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
