import React from 'react';

type Props = {};

type State = {
  query: string;
};

export class Message extends React.Component<Props, State> {
  state: State = {
    query: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ query: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ query: event.key });
    });
  }

  render() {
    const { query } = this.state;

    return (
      <p className="App__message">
        {query
          ? `The last pressed key is [${query}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}
