import { Component } from 'react';

type State = {
  buttonUp: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    buttonUp: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ buttonUp: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.buttonUp !== ''
              ? `The last pressed key is [${this.state.buttonUp}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
