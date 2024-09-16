import { Component } from 'react';

type State = {
  keyPressedValue: string;
};

export class App extends Component<{}, State> {
  state = {
    keyPressedValue: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  handlerKeyUp = (event: KeyboardEvent) => {
    this.setState({
      keyPressedValue: event.code === 'Space' ? 'Space' : event.key,
    });
  };

  render() {
    const { keyPressedValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!keyPressedValue
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyPressedValue}]`}
        </p>
      </div>
    );
  }
}
