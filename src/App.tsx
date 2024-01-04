import React from 'react';

type State = {
  keyButton: string;
};
export class App extends React.Component<{}, State> {
  state = {
    keyButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ keyButton: event.key });
  };

  render() {
    const { keyButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyButton
            ? `The last pressed key is [${keyButton}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
