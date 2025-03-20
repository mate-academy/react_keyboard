import React from 'react';

interface State {
  keyboard: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    keyboard: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ keyboard: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { keyboard } = this.state;

    const condition = keyboard.length;

    return (
      <div className="App">
        <p className="App__message">
          {condition
            ? `The last pressed key is [${keyboard}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
