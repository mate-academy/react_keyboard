import React from 'react';

type State = {
  currentKey: string | null;
};

export class App extends React.Component {
  state: State = {
    currentKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyPress);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handlerKeyPress);
  }

  handlerKeyPress = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey
            ? `The last pressed key is[${currentKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
