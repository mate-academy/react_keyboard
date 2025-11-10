import React from 'react';

type State = {
  keyName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    keyName: '',
  };

  keyUpHandler = (event: KeyboardEvent) =>
    this.setState({ keyName: event.key });

  componentDidMount() {
    window.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    const { keyName } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyName
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
