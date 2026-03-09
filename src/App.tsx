import React from 'react';

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      pressedKey: null,
    };
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey === null
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    );
  }
}
