import React from 'react';

type State = {
  pressed: boolean;
  key: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressed: false,
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
      pressed: true,
    });
  };

  render() {
    const { key, pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressed
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
