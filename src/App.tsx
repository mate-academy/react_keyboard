import { Component } from 'react';

type State = {
  pressed: string;
};

export class App extends Component<{}, State> {
  state = {
    pressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressed: event.key });
  };

  render() {
    const { pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed
            ? `The last pressed key is [${pressed}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}
