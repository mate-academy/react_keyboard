import React from 'react';

type Props = {
  key: string;
};

type State = {
  key: string;
  wasKeyDown: boolean;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    key: '',
    wasKeyDown: false,
  };

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
    this.setState({ wasKeyDown: true });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyHandler);
  }

  render() {
    const { key, wasKeyDown } = this.state;

    return (
      <div className="App">
        {!wasKeyDown && <p className="App__message">Nothing was pressed yet</p>}
        {wasKeyDown && (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}
