import React from 'react';

type State = {
  keyUp: string,
};

export class App extends React.Component<{}, State> {
  state = {
    keyUp: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({
      keyUp: event.key,
    });
  };

  render() {
    const { keyUp } = this.state;

    return (
      <div className="App">
        {keyUp.length === 0
          ? <p>Nothing was pressed yet</p>
          : (
            <p>
              The last pressed key is
              {' '}
              <span>{keyUp}</span>
            </p>
          )}
      </div>
    );
  }
}
