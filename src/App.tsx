import React from 'react';

interface State {
  letter: string | null,
}

export class App extends React.Component {
  state: State = {
    letter: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.passedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.passedKey);
  }

  passedKey = (event: KeyboardEvent): void => {
    this.setState({ letter: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.letter
          ? (
            <p className="App__message">
              The last pressed key is &#91;
              {this.state.letter}
              &#93;
            </p>
          )
          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}
