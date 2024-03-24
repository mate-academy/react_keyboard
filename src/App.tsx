import React from 'react';

interface State {
  key: string;
}

export class App extends React.Component {
  state: State = {
    key: '',
  };

  handleKeyClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  render() {
    return (
      <div className="App">
        {this.state.key ? (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
