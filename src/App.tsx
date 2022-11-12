import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render(): React.ReactNode {
    const key = this.state.keyPressed;

    return (
      <div className="App">
        <p className="App__message">
          {
            key ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
