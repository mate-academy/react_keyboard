import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
  message: string;
};

export class AppMessage extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  handleDocumentPressButton = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentPressButton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentPressButton);
  }

  render() {
    return <p className="App__message">{this.state.message}</p>;
  }
}
