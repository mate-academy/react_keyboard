import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleDocumentClick = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  render() {
    const key = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
