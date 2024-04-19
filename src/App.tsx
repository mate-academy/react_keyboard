import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: State = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!key
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
