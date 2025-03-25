import React from 'react';

export class App extends React.Component {
  state = {
    press: '',
  };

  handle = () => {
    document.addEventListener('keydown', event => {
      this.setState({ press: event.key });
    });
  };

  componentDidMount(): void {
    this.handle();
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handle);
  }

  render() {
    return (
      <div className="App">
        {this.state.press ? (
          <p className="App__message">
            The last pressed key is [{this.state.press}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
