import { Component } from 'react';

type State = {
  isPressed: boolean;
  keyName: string;
};

export class App extends Component {
  state: State = {
    isPressed: false,
    keyName: '',
  };

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({
      isPressed: true,
      keyName: event.key,
    });
  };

  clearState = () => {
    this.setState({
      isPressed: false,
      keyName: '',
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.isPressed
            ? `The last pressed key is [${this.state.keyName}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
    this.clearState();
  }
}
