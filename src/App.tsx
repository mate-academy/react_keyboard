import React from 'react';

type State = {
  keyUp: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    keyUp: '',
  };

  setKey = (event: KeyboardEvent) => {
    this.setState({ keyUp: String(event.key) });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.setKey);
  }

  render() {
    const { keyUp } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyUp === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyUp}]`}
        </p>
      </div>
    );
  }
}
