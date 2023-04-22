import { Component } from 'react';

export class KeyPressed extends Component {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ keyPressed: 'Nothing was pressed' });
    }, 1000);
  }

  componentDidUpdate() {
    document.addEventListener('keyup',
      (event: KeyboardEvent) => this.keyBoardHandler(event));
  }

  componentWillUnmount() {
    this.inform();
  }

  inform = () => {
    document.removeEventListener('keyup', this.keyBoardHandler);
  };

  keyBoardHandler = (event?: KeyboardEvent) => {
    const message = `The last pressed key is ${event?.key}`;

    this.setState({ keyPressed: message });
  };

  render() {
    const message2 = this.state.keyPressed;

    return (
      <>
        {message2}
      </>
    );
  }
}
