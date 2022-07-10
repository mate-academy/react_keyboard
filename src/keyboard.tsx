import React from 'react';

interface State{
  phrase: string;
}

export class Keyboard extends React.Component<{}, State> {
  state = {
    phrase: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.callback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.callback);
  }

  callback = (event: KeyboardEvent) => {
    this.setState({ phrase: `The last pressed key is ${event.key}` });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.phrase}</p>
      </div>
    );
  }
}
