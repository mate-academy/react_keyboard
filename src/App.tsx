import React from 'react';

type Props = {
  key: string;
};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render(): React.ReactNode {
    const key = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {`${
            key
              ? `${`The last pressed key is [${key}]`}`
              : 'Nothing was pressed yet'
          }`}
        </p>
      </div>
    );
  }
}
