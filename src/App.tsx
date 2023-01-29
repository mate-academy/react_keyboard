import { Component } from 'react';
import './index.scss';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.updatePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.updatePressedKey);
  }

  updatePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div>
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}
