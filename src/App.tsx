import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  handleDocumentKeyup = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
