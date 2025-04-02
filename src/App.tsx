import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<State> {
  public state: State = {
    message: '',
  };

  public handleDocumentKeydown = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  public componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeydown);
    this.setState({ message: 'Nothing was pressed yet' });
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeydown);
  }

  public render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
