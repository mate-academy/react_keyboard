import React from 'react';

type Props = {

};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    const { pressedKey } = this.state;

    if (pressedKey === '') {
      return <p className="App__message">Nothing was pressed yet</p>;
    }

    return (
      <p className="App__message">The last pressed key is [{pressedKey}]</p>
    );
  }
}
