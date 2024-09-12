import React from 'react';

type State = {
  str: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    str: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event:KeyboardEvent) => {
    this.setState({ str: event.key });
  };

  render() {
    const { str } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {str
            ? `The last pressed key is ["${str}"]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
