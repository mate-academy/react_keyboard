import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
