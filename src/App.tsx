import React from 'react';

type AppState = {
  key: string | null
}

export class App extends React.Component {
  state: AppState = {
    key: null,
  };

  // handler for key
  handlerOnKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  // mount ( when created component)
  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerOnKey);
  }

  // unmount (remove component from virtual dom)
  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerOnKey);
  }

  render() {
    return (
      <div>
        {!this.state.key ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        )}
      </div>
    );
  }
}
