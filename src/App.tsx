import React from 'react';

interface State {
  key: string | null;
}

export class App extends React.PureComponent {
  state: State = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyboardEvent);
  }

  handleDocumentKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

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
