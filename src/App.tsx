import React from 'react';

type State = {
  myKey: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    myKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.lastKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.lastKeyClick);
  }

  lastKeyClick = (elem: KeyboardEvent) => {
    this.setState({
      myKey: elem.key,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.myKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {this.state.myKey}
              ]
            </p>
          )
          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}
