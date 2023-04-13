import React from 'react';

type State = {
  pressedKey: string;
  wasSomethingPressed: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
    wasSomethingPressed: false,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({
      pressedKey: event.key,
      wasSomethingPressed: true,
    });
  };

  render() {
    const { pressedKey, wasSomethingPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {wasSomethingPressed
            ? `The last pressed key is [${pressedKey}]`
            : pressedKey}
        </p>
      </div>
    );
  }
}
