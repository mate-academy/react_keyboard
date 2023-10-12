import React from 'react';

type State = {
  title: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    title: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ title: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {title}
        </p>
      </div>
    );
  }
}
