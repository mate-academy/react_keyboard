import React from 'react';

type Props = {};

export class App extends React.Component<Props> {
  state = {
    keyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({
      keyPressed: e.key,
    });
  };

  render(): React.ReactNode {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {keyPressed ? (
          <p className="App__message">
            The last pressed key is
            [
            {keyPressed}
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
