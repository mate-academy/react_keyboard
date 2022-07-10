import React, { KeyboardEvent } from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.setKey);
  }

  setKey = (event: KeyboardEvent) => {
    this.setState(event.key === ' '
      ? { key: 'Space' }
      : { key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div>
        {this.state.key}
      </div>
    );
  }
}
