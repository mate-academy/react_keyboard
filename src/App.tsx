import { Component } from 'react';

export class App extends Component<{}, { myKey: string; }> {
  state = {
    myKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ myKey: event.key });
  };

  render() {
    const { myKey } = this.state;

    return (

      <div className="App">
        <h1>Press KEY</h1>
        <p className="App__message">
          {myKey
            ? (`The last pressed key is [
          ${myKey}
          ]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
