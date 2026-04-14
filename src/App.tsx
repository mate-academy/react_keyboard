import React, { useEffect, useState } from 'react';

const AppFunctionalComponent: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    window.addEventListener('keyup', handleKeyPress);

    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};

class AppClassComponent extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

export { AppClassComponent as App, AppFunctionalComponent };
