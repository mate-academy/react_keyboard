import React from 'react';

type State = {
  key: string,
  didClick: boolean,
};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
    didClick: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key, didClick: true });
    });
  }

  componentDidUnMount() {
    document.removeEventListener('keyup', () => {
      this.setState({ key: '', didClick: false });
    });
  }

  render() {
    const { key, didClick } = this.state;

    return (
      <div className="App">
        <p className="App__message">{didClick ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}</p>
      </div>
    );
  }
}
