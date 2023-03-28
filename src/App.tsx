import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    const message = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          { message }
        </p>
      </div>
    );
  }
}
