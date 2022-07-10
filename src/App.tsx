import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? (<h1>{`The last pressed key is [ ${this.state.pressedKey} ]`}</h1>)
          : (<h1>Nothing was pressed yet</h1>)}
      </div>
    );
  }
}
