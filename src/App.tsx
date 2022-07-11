// import { event } from 'cypress/types/jquery';
import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.key);

    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === 'Nothing was pressed yet'
          ? <p>{pressedKey}</p>
          : (
            <p>
              The last pressed key is
              {' '}
              {`"${pressedKey}"`}
            </p>
          )}
      </div>
    );
  }
}
