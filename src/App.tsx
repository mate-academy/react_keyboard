import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.changeLastKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.changeLastKey);
  }

  changeLastKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p>
          {
            this.state.key
              ? `The last pressed key is [${this.state.key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
