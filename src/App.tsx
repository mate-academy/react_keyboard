import React from 'react';
import './index.scss';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      return this.setState({ key: `Pressed key is ${event.key}` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      return this.setState({ key: `Pressed key is ${event.key}` });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>{key}</p>
          </div>
        </div>
      </div>

    );
  }
}
