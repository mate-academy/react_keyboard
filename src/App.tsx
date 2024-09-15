// import { prependOnceListener } from 'process';
import React from 'react';

type Props = {};
type State = {
  key: string,
};

export class App extends React.Component<Props, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.showLastKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.showLastKey);
  }

  showLastKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const lastKey = this.state.key
      ? `The last pressed key is [${this.state.key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {lastKey}
        </p>
      </div>
    );
  }
}
