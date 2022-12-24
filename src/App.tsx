import { Component } from 'react';

export class App extends Component {
  state = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {
          key
            ? <p className="App__message">{`The last pressed key is [${key}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}
