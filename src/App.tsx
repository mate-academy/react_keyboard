import React from 'react';

type State = {
  keyPressed: string;
};
export class App extends React.Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.Key);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.Key);
  }

  Key = (event: KeyboardEvent) => {
    this.setState({
      keyPressed: event.key,
    });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? (`The last pressed key is [${keyPressed}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
