import React from 'react';

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

  setKey = (btn: KeyboardEvent) => {
    this.setState(btn.key === ' '
      ? { key: `The last pressed key is 'Space'` }
      : { key: `The last pressed key is ${btn.key}` });
  };

  render(): React.ReactNode {
    return (
      <div>
        {this.state.key}
      </div>
    );
  }
}
