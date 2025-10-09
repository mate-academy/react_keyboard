import React from 'react';

type State = {
  key: string;
  keyIsPressed: boolean;
};

export class App extends React.PureComponent<State> {
  state: State = {
    key: '',
    keyIsPressed: false,
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
      keyIsPressed: true,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    const { key, keyIsPressed } = this.state;

    return (
      <div className="App">
        {keyIsPressed ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
