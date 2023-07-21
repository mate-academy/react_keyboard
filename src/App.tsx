import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handKeyCLick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handKeyCLick);
  }

  handKeyCLick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        <p>{pressedKey}</p>
      </div>
    );
  }
}
