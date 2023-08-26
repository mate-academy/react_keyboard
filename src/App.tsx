import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div>
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
