import React from 'react';

type State = {
  key: string
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
  };

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp = (event: KeyboardEvent) => {
    if (event) {
      this.setState({key: `The last pressed key is [${event.key}]` })
    }
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">{key}</p>
      </div>
    );
  }
}
