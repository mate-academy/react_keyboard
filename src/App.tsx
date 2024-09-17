import { Component } from 'react';

type State = {
  nameOfPressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    nameOfPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ nameOfPressedKey: event.key });
  };

  render() {
    const { nameOfPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {nameOfPressedKey
            ? `The last pressed key is [${nameOfPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
