import React from 'react';

type State = {
  enter: string;
};

export class App extends React.Component {
  state: State = {
    enter: '',
  };

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ enter: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  render() {
    return (
      <div className="App">
        {this.state.enter ? (
          <p className="App__message">
            The last pressed key is [{this.state.enter}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
