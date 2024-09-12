import React from 'react';

export class App extends React.Component {
  state = {
    enteredKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e:KeyboardEvent) => {
    this.setState({ enteredKey: e.key });
  };

  render() {
    const { enteredKey } = this.state;

    return (
      <div className="App">
        {enteredKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {enteredKey}
              ]
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
