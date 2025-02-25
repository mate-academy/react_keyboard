import React from 'react';

type Props = {

};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handlePressedKeyChange = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKeyChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKeyChange);
  }


  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
      <p className="App__message">
        {pressedKey
        ? `The last pressed key is [${pressedKey}]`
        : 'Nothing was pressed yet'}
      </p>
    </div>
    );
  }
};

