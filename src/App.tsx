import React from 'react';

type State = {
  keyValue: string;
};

type Property = {
  handleKeyUp: (event: KeyboardEvent) => void;
};

export class App extends React.Component<Property, State> {
  state: State = {
    keyValue: '',
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ keyValue: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { keyValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyValue
            ? `The last pressed key is [${keyValue}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
