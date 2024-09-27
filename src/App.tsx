import React, { useEffect, useState } from 'react';

export const App2: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleDocumentKeyUp = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleDocumentKeyUp);

    return () => document.removeEventListener('keyup', handleDocumentKeyUp);
  }, [pressedKey]);

  return (
    <div className="App">
      <p className="App__message">
        {!pressedKey
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
