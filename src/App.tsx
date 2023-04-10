import { Component } from 'react';

export class App extends Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getKey);
  }

  getKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { key ? `The last pressed key is ${key}` : "Nothing was pressed yet"}
        </p>
      </div>
    );
  }
}
