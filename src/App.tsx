import React, { } from 'react';

export class App extends React.Component {
  state = {
    pressedKeyв: '',
  };

  pressKeydup() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState(() => this.state.pressedKeyв = event.key)
    });
  }

  componentDidMount() {
    this.pressKeydup();
  };

  componentWillUnmount() {
    document.removeEventListener('remuv',this.pressKeydup)
  }

  render() {
    return (
      <div className="App">
        <p
          className="App__message"
        >
          {this.state.pressedKeyв
            ? `The last pressed key is [${this.state.pressedKeyв}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
