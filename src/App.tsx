import React from 'react';

type State = {
  title: string;
};

export class App extends React.Component<{}, State> {
  state = {
    title: 'Nothing was pressed yet',
  };

  updateTitleOnKeyUp = (event: KeyboardEvent) => {
    this.setState({
      title: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.updateTitleOnKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.updateTitleOnKeyUp);
  }

  render(): React.ReactNode {
    const { title } = this.state;

    return (
      <div className="App">
        <p className="App__message">{title}</p>
      </div>
    );
  }
}
