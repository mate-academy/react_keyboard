import React from 'react';

type State = {
  pushedButton: string;
};

export class PushButton extends React.Component<{}, State> {
  state = {
    pushedButton: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.KeyboardsListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.KeyboardsListener);
  }

  KeyboardsListener = (event: KeyboardEvent) => {
    this.setState({ pushedButton: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pushedButton } = this.state;

    return (
      <p className="App__message">{pushedButton}</p>
    );
  }
}
