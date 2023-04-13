import React from 'react';

interface State {
  pressedKey: string,
}

interface Props {
  prop?: number;
}

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: 'nothing',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey === 'nothing'
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
