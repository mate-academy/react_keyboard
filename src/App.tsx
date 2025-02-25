//import { extend } from 'cypress/types/lodash';
import React from 'react';

interface State {
  message: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleButton = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleButton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleButton);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
