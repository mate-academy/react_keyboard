/* eslint-disable react/jsx-curly-newline */
import { Component } from 'react';

type State = {
  key: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
