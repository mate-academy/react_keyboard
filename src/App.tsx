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
  };

  render() {
    const { keyPress } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPress
            ? `The last pressed key is [${keyPress}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
