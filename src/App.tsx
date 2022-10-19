import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyListener);
    // document.addEventListener('contextmenu', (event: Event) => {
    //   event.preventDefault();
    // });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyListener);
  }

  keyListener = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
