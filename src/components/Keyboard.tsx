import React, { ReactNode } from 'react';

interface State {
  key: string;
}

export class Keyboard extends React.PureComponent {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyPressed);
  }

  handleDocumentKeyPressed = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
