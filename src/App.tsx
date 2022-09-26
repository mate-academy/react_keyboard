import { Component } from 'react';

type State = {
  pressedkey: boolean;
  nameOfkey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedkey: false,
    nameOfkey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documntKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.documntKeyUp);
  }

  documntKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedkey: true, nameOfkey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedkey
            ? `The last pressed key is [${this.state.nameOfkey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
