import { Component } from 'react';

export class App extends Component {
  state = {

    pressedKey: null,

  };

  componentDidMount() {
    document.addEventListener('keyup', this.event);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.event);
  }

  event = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({
      pressedKey: key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (

      <div className="App">
        <p className="App__message">
          {pressedKey != null 
          ? `The last pressed key is [${pressedKey}]` 
          : 'Nothing was pressed yet'}
        </p>
      </div>

    );
  }
}
