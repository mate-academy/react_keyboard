import React from 'react';

type State = {
  curentKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    curentKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ curentKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ curentKey: event.key });
    });
  }

  render() {
    const { curentKey } = this.state;

    return (
      <div className="App">
        {(curentKey === ''
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${curentKey}]`}</p>
        )}

      </div>
    );
  }
}
