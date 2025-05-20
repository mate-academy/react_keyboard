import React from 'react';

type State = {
  isKeyPressed: boolean;
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isKeyPressed: false,
    key: '',
  };

  showKey = (e: KeyboardEvent) => {
    this.setState({ key: e.key, isKeyPressed: true });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.showKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.showKey);
  }

  render() {
    const { isKeyPressed, key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {isKeyPressed
            ? `The last pressed key is [${key}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
