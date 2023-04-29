import { Component } from 'react';

export class KeyPressed extends Component {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
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
    const { keyPressed } = this.state;

    return (
      <>
        {keyPressed.length > 0 ? `The last pressed key is [${keyPressed}]` : 'Nothing was pressed yet'}
      </>
    );
  }
}
