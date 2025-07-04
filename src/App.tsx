import React from 'react';

type Props = {
  customName: string;
};

type State = {
  lastKey: string;
};

export class Helper extends React.Component<Props, State> {
  state: State = {
    lastKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastKey: key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export const App: React.FC = () => {
  return <Helper customName="helper" />;
};
