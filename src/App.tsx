import React from 'react';

interface State {
  key: string;
}

export class WhatIsPressed extends React.Component<{}, State> {
  state = {
    key: 'Meta',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <p className="App__message">
        {key === 'Meta'
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${key}]`}
      </p>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <WhatIsPressed />
  </div>
);
