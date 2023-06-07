import React from 'react';

type State =
{
  pressedKey: string | null,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedKey
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.pressedKey}]`
          }
        </p>
      </div>
    );
  }
}

// render() {
//   return (
//     <div className="App">
//       <p className="App__message">The last pressed key is [Enter]</p>
//     </div>
//   );
// }
