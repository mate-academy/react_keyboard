import React from 'react';

type State = {
  lastButton: string;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastButton : event.key })
  }

  render () {
    const { lastButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">{lastButton ? `The last pressed key is [${lastButton}]`
                                    : 'Nothing was pressed yet'}</p>
      </div>
    )
  }
}
