import React from 'react';

type State = {
  usedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    usedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.PressKeys);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.PressKeys);
  }

  PressKeys = (event: KeyboardEvent): void => {
    this.setState({
      usedKey: event.key,
    });
  };

  render() {
    const { usedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            usedKey
              ? `The last pressed key is [${usedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
