import React from 'react';

type State = {
  curentKey: string,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    curentKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({
      curentKey: event.code === 'Space'
        ? 'space'
        : event.key,
    });
  };

  render() {
    const { curentKey } = this.state;

    return (
      <div className="App">
        {(!curentKey
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${curentKey}]`}</p>
        )}

      </div>
    );
  }
}
