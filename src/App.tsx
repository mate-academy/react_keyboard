import React from 'react';

type Props = {};

type State = {
  keyPressed: string;
};

export class App extends React.Component<Props, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {keyPressed ? `The last pressed key is "${keyPressed}"` : 'Nothing was pressed yet'}
      </div>
    );
  }
}
