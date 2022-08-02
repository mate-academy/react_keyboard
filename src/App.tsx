import React from 'react';

type State = {
  keyCode: string,
};

export class App extends React.Component<{}, State> {
  state = {
    keyCode: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ keyCode: event.key });
  };

  render() {
    const { keyCode } = this.state;

    return (
      <p className="App__message">
        {keyCode.length
          ? `The last pressed key is [${keyCode}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}
