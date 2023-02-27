import React from 'react';

export class App extends React.Component {
  state = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKey);
  }

  handleDocumentKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  removeEventListener() {
    document.removeEventListener('keyup', this.handleDocumentKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>

      </div>
    );
  }
}
