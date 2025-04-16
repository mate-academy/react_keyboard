import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type Props = {
  key: string;
};

type State = {
  pressKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pressKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {`${
            this.state.pressKey
              ? `${`The last pressed key is [${this.state.pressKey}]`}`
              : 'Nothing was pressed yet'
          }`}
        </p>
      </div>
    );
  }
}
