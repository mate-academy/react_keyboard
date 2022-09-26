/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

type Props = {};

type State = {
  message: string;
};

export class App extends Component<Props, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
