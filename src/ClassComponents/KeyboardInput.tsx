import React from 'react';

type State = {
  keyPressed: string;
};

export class KeyboardInput extends React.Component {
  state: State = {
    keyPressed: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyChange);
  }

  handleKeyChange = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ keyPressed: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed !== '' ? (
            <>The last pressed key is [{this.state.keyPressed}]</>
          ) : (
            <>Nothing was pressed yet</>
          )}
        </p>
      </div>
    );
  }
}
