import React from 'react';

type State = {
  currentKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    currentKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({
      currentKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render() {
    const { currentKey: currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${currentKey}]`}
        </p>
      </div>
    );
  }
}
