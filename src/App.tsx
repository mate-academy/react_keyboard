import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
