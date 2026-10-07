import React from 'react';
import { Message } from './components/Message';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleChangeKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleChangeKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleChangeKey);
  }

  render() {
    return (
      <div className="App">
        <Message pressedKey={this.state.pressedKey} />
      </div>
    );
  }
}
