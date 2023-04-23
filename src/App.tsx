import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.setState);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
