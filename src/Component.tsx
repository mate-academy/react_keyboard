import { Component } from 'react';

export class KeyPressed extends Component {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup',
      (event: KeyboardEvent) => this.keyBoardHandler(event));
  }

  componentDidUpdate() {
    document.addEventListener('keyup',
      (event: KeyboardEvent) => this.keyBoardHandler(event));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyBoardHandler);
  }

  keyBoardHandler = (event?: KeyboardEvent) => {
    const message = event?.key;

    this.setState({ keyPressed: message });
  };

  render() {
    const message2 = this.state.keyPressed;

    return (
      <>
        {message2.length > 0 ? `The last pressed key is [${message2}]` : 'Nothing was pressed yet'}
      </>
    );
  }
}
