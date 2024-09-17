import React from 'react';

type State = {
  justPressedKey: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    justPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocKeyUp);
  }

  handleDocKeyUp = (e: KeyboardEvent) => {
    this.setState({ justPressedKey: e.key });
  };

  render() {
    const key = this.state.justPressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
