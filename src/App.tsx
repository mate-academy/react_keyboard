import React from 'react';

type State = {
  enter: string;
};

export class App extends React.Component<{}, State> {
  state = {
    enter: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerEnter);
  }

  handlerEnter = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ enter: key });
  };

  render() {
    const { enter } = this.state;

    return (
      <div className="App">
        <p
          className="App__message"
        >
          {enter ? `The last pressed key is [${enter}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
