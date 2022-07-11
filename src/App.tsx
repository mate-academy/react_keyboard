import React from 'react';

export class App extends React.Component<{}, {}> {
  state = {
    logs: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyCatcher);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyCatcher);
  }

  keyCatcher = (event: KeyboardEvent) => {
    this.setState({ logs: `${event.key}` });
  };

  render = () => {
    const { logs } = this.state;

    return (
      <div className="App">
        {logs === null
          ? <p>Nothing was pressed yet...</p>
          : (
            <p>
              The last pressed key is:
              <span>
                {logs}
              </span>
            </p>
          )}
      </div>
    );
  };
}
