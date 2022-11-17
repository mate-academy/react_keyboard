import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
      this.setState({ pressedKey: '' });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? (
              <>
                {'The last pressed key is: '}
                <b>{this.state.pressedKey}</b>
              </>
            )
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
