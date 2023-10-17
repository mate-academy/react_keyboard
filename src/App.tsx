import React from 'react';

type AppState = {
  title: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    title: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
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
