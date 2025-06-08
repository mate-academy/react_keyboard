import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    let keyName = event.key;

    if (keyName === ' ') {
      keyName = 'Space';
    }

    this.setState({
      keyPressed: `The last pressed key is [${keyName}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">{keyPressed}</p>
      </div>
    );
  }
}
