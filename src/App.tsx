import React from 'react';

type State = {
  useKey: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    useKey: '',
  };

  handlerKeyUp!: (event: KeyboardEvent) => void;

  componentDidMount = () => {
    this.handlerKeyUp = (event: KeyboardEvent) => {
      this.setState({ useKey: event.key });
    };

    document.addEventListener('keyup', this.handlerKeyUp);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handlerKeyUp);
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.useKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.useKey}]`}
        </p>
      </div>
    );
  }
}
