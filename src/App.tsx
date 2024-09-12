import { Component } from 'react';
import './index.scss';

type State = {
  message: string;
};

export class App extends Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.documentKeyUp);
  }

  documentKeyUp = (event: KeyboardEvent) => {
    const message = `The last pressed key is [${event.key}]`;

    this.setState({ message });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
