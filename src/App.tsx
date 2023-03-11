import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboard);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handleKeyboard);
  }

  handleKeyboard = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
}
