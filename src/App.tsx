import React from 'react';

// export const App: React.FC = () => (
// <div className="App">
//   <p className="App__message">The last pressed key is [Enter]</p>
// </div>
// );

interface State {
  message: string;
}

interface Props {}

export class App extends React.Component<Props, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  listener = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.listener);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
