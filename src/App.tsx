import React from 'react';

type State = {
  pressedKey: string;
};
type Props = {};
export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
