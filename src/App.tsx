import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render() {
    const {
      key,
    } = this.state;

    return (
      <div className="App">
        {key
          ? <p>{`The last pressed key is [${key}]`}</p>
          : <p>Nothing was pressed yet</p>}
      </div>
    );
  }
}
