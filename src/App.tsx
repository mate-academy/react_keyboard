import React from 'react';

type Styte = {
  keyPressed: string;
};

export class App extends React.Component<{}, Styte> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerDocumentPressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerDocumentPressKey);
  }

  handlerDocumentPressKey = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ keyPressed: pressedKey });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!keyPressed
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyPressed}]`}
        </p>
      </div>
    );
  }
}
