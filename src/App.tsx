import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component <{}, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleMessage);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleMessage);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  handleMessage = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  render(): React.ReactNode {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>

    );
  }
}
