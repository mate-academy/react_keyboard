import { Component } from 'react';

type State = {
  key: string;
};

export default class App extends Component {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressEvent);
  }

  handleKeyPressEvent = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">
            The last pressed key is [
            { key }
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
