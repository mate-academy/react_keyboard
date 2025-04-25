import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    if (this.state.pressedKey === '') {
      return <p className="App__message">Nothing was pressed yet</p>;
    }

    return (
      <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
    );
  }
}
