import React from 'react';

type State = {
  key: string,
};

export class AppMessage extends React.Component {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyBoard);
  }

  onKeyBoard = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <p className="App__message">
        {key
          ? `The last pressed key is [${key}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}
