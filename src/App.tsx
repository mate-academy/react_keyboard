import { Component } from 'react';

type State = {
  keyPress: string,
};

export class App extends Component<{}, State> {
  state = {
    keyPress: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documentCLick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.documentCLick);
  }

  documentCLick = (event: KeyboardEvent) => {
    const keyPress = event.key;

    this.setState({ keyPress });

    return keyPress;
  };

  render() {
    const { keyPress } = this.state;
    const message = keyPress;

    return (
      <div className="App">
        <p className="App__keyPress">
          {message
            ? `The last pressed key is [${message}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
