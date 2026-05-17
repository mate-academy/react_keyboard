import React from 'react';

interface State {
  lastKey: string;
}

type ClassName = {
  App: string;
  App__message: string;
};
export class App extends React.Component<object, State> {
  className: ClassName = {
    App: 'App',
    App__message: 'App__message',
  };

  state: State = {
    lastKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      lastKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className={this.className.App}>
        {lastKey ? (
          <p className={this.className.App__message}>
            The last pressed key is [{lastKey}]
          </p>
        ) : (
          <p className={this.className.App__message}>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
