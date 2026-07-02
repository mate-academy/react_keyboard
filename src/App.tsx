import React from 'react';

interface State {
  value: string;
}
export class App extends React.Component<{}, State> {
  state: State = {
    value: '',
  };

  handleKeyUp  = (event: KeyboardEvent) => {
    this.setState({ value: event.key });
  };

  componentDidMount(): void {
    this.setState({ value: '' });
  }

  componentDidUpdate(): void {
    document.addEventListener('keyup', this.handleKeyUp );
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp );
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.value === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.value}]`}
        </p>
      </div>
    );
  }
}
