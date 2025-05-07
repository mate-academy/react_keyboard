import React from 'react';

type State = {
  lastPressedKey: string;
  defaultMessage: string;
};

export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
    defaultMessage: 'Nothing was pressed yet',
  };

  keyPressEventListener = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressEventListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressEventListener);
  }

  render() {
    const { lastPressedKey, defaultMessage } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : defaultMessage}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
