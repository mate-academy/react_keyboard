import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({
      key: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    const { key } = this.state;

    return (
      <>
        <div className="App">
          <p className="App__message">{key}</p>
        </div>
      </>
    );
  }
}
