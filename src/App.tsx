import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyClick);
  }

  handleKeyClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        <p>{pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}</p>
      </div>
    );
  }
}
