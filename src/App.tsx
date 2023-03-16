import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        key: event.key,
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        key: event.key,
      });
    });
  }

  render() {
    const { key } = this.state;
    const messege = !key ? 'Nothing was pressed yet' : `The last pressed key is [${this.state.key}]`;

    return (
      <div className="App">
        <p className="App__message">
          {messege}
        </p>
      </div>
    );
  }
}
