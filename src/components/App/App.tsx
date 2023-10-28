import React from 'react';

type State = {
  currentKey: string
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    currentKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        {!currentKey
          && <p className="App__message">Nothing was pressed yet</p>}
        {currentKey
          && <p className="App__message">{`The last pressed key is ${currentKey}`}</p>}
      </div>
    );
  }
}
