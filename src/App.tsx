import React, { useEffect, useState } from 'react';

const AppFunctionalComponent: React.FC = () => {
  const [lastPressedKey, setLastPressedKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setLastPressedKey(event.key);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {lastPressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${lastPressedKey}]`}
      </p>
    </div>
  );
};

class AppClassComponent extends React.Component {
  state = {
    lastPressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}

export { AppClassComponent as App, AppFunctionalComponent };
