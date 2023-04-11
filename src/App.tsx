import React from 'react';

interface State {
  key: null | string,
}

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  keyPressHandler = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {
          !key
            ? <p className="App__message">Nothing was pressed yet</p>
            : <p className="App__message">{`The last pressed key is [${key}]`}</p>
        }
      </div>
    );
  }
}
