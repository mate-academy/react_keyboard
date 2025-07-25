import React from 'react';

type State = {
  keyName: string;
  changed: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    keyName: '',
    changed: false,
  };

  componentDidMount(): void {
    this.setState({
      keyName: 'Nothing was pressed yet',
    });
  }

  componentDidUpdate(
    // prevProps: Readonly<{}>,
    // prevState: Readonly<{}>,
    // snapshot?: any,
  ): void {
    // const changed = prevState.keyName !== this.state.keyName;

    window.addEventListener('keydown', e => {
      this.setState({
        keyName: e.key,
        changed: true,
      });
    });
  }

  render() {
    const { keyName, changed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {changed
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
