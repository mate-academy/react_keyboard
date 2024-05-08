import React from 'react';

type Props = {
  key: string;
};

export class App extends React.Component {
  state: Props = {
    key: '',
  };

  handleKeyup = () => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  };

  componentDidMount() {
    this.handleKeyup();
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
