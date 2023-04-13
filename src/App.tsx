import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'nothing',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerFunc);
  }

  componentDidUpdate(): void {
    document.addEventListener('keyup', this.handlerFunc);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerFunc);
  }

  handlerFunc = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === 'nothing'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
