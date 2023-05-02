import React from 'react';

type State = {
  key:string
};

export class App extends React.Component<{}, State> {
  state:State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.eventFunc);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.eventFunc);
  }

  eventFunc = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!key ? (<>Nothing was pressed yet</>) : (
            <>
              The last pressed key is [
              {key}
              ]
            </>
          )}
        </p>
      </div>
    );
  }
}
