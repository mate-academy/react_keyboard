import React from 'react';

type State = {
  pressKey: string | null;
};

export class App extends React.Component {
  state: State = {
    pressKey: null,
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressKey}]`}
        </p>
      </div>
    );
  }
}
