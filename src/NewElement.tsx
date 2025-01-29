import React from 'react';

type State = {
  pressedKey: string;
};
type Props = {};
export class NewElement extends React.Component<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${e.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
