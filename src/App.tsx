import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent {
  state: State = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerDocumentKeyUp);
  }

  handlerDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? (
            `The last pressed key is [${key}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
