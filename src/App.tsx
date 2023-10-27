import React from 'react';

type State = {
  keys :string
};
// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<State> {
  state:State = {
    keys: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlebooton);
  }

  componentWillUnmount():void {
    document.removeEventListener('keyup', this.handlebooton);
  }

  handlebooton = (event: KeyboardEvent) => {
    this.setState({ keys: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { keys } = this.state;

    return (
      <div className="App">
        <p className="App__message">{keys}</p>
      </div>
    );
  }
}
