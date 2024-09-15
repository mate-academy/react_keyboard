import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentPressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentPressKey);
  }

  handleDocumentPressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? (`The last pressed key is [${pressedKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
