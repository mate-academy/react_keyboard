import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : // eslint-disable-next-line prettier/prettier
            'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
