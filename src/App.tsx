import { Component } from 'react';

export class App extends Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.setKey);
  }

  setKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  removeEventListener() {
    document.removeEventListener('keyup', this.setKey);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>

      </div>
    );
  }
}
