import React from 'react';

// type State = {
//   pressedKey: string;
// };

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyboard);
  }

  handleDocumentKeyboard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
