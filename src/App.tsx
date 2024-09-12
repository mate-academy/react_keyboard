import React from 'react';

type State = {
  key: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p
          className="App__message"
        >
          {key
            ? (`The last pressed key is [${key}]`)
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
