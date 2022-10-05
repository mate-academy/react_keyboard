import React from 'react';
import './index.scss';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.documentClick);
  }

  documentClick = (e: KeyboardEvent) => {
    const keyPressMessage = `The last pressed key is [${e.key}]`;

    if (e) {
      this.setState({ message: keyPressMessage });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
