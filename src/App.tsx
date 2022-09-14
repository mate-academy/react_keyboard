import { Component, ReactNode } from 'react';

interface Key {
  key: string;
}

export class App extends Component {
  state: Key = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getKey);
  }

  getKey = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render(): ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
