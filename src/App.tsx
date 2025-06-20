import React from 'react';

interface State {
  pressedKey: string | null;
}

interface Props {
  title: string;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState(prevState => ({
      pressedKey:
        `The last pressed key is [${event.key}]` || `${prevState.pressedKey}`,
    }));
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}
