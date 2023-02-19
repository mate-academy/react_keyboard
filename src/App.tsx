import { Component } from 'react';

export class App extends Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeyDown);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
  }

  handleWindowKeyDown = (e: KeyboardEvent) => {
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
