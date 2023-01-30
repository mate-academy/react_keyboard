import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => (
    this.setState({ key: event.key })
  );

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {
          !(key)
            ? <p className="App__message">Nothing was pressed yet</p>
            : <p className="App__message">{`The last pressed key is [${key}]`}</p>
        }
      </div>
    );
  }
}
