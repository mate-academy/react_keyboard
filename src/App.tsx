import React from 'react';

type State = {
  pressedButton: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedButton: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      const pressedButton = e.key;

      this.setState({ pressedButton });
    });
  }

  render() {
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedButton ? `The last pressed key is [${pressedButton}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
