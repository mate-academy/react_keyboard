import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyboardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyboardClick);
  }

  handleDocumentKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };


  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
        </p>
      </div> 
    )
  }
}
